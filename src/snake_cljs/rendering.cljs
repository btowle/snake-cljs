(ns snake-cljs.rendering
  (:require [clojure.string :as string]
            [goog.dom :as dom]))

(def default-font "bold 12px sans-serif")

;;JS interop
(defn canvas [canvas-width canvas-height grid-size border-width]
  (let [container (dom/getElement "canvas-container")
        canvas (dom/htmlToDocumentFragment
                            (str "<canvas id='canvas' "
                            "width='" canvas-width "' "
                            "height='" canvas-height "' "
                            "tabindex='1'" ;;hack for keydown events
                            "'></canvas>"))]
    (dom/append container canvas)
    {:canvas canvas
     :context (.getContext canvas "2d")
     :grid-size grid-size
     :border-width border-width
     :width (. canvas -width)
     :height (. canvas -height)}))

(defn rgba-string
  ([r g b a]
    (str "rgba(" (string/join "," [r g b a]) ")"))
  ([r g b]
    (rgba-string r g b 255))
  ([value-list]
    (let [[r g b a] value-list]
      (rgba-string r g b (or a 255)))))

(defn color [color-name & modifiers]
  (let [value (if (some #(= :dark %) modifiers) 100 255)
        colors {:black '(0 0 0)
                :white '(1 1 1)
                :red   '(1 0 0)
                :green '(0 1 0)
                :blue  '(0 0 1)}]
    (rgba-string (map #(* value %) (colors color-name)))))

(defn set-fill-color
  ([canvas rgba]
    (set! (. (:context canvas) -fillStyle) rgba))
  ([canvas r g b & a]
    (if (nil? a)
      (set-fill-color canvas (rgba-string r g b))
      (set-fill-color canvas (rgba-string r g b (first a))))))

(defn clear-board
  [canvas]
  (let [{:keys [border-width height width]} canvas
        x border-width
        y x
        w (- width (* 2 border-width))
        h (- height (* 2 border-width))]
    (.clearRect (:context canvas) x y w h)))

(defn draw-box
  ([canvas x y w h]
    (.fillRect (:context canvas) x y w h))
  ([canvas x y w]
    (draw-box canvas x y w w))
  ([canvas box]
    (let [[x y w h] box]
      (draw-box canvas x y w h))))

(defn draw-string
  ([canvas string x y font-string]
    (let [ctx (:context canvas)]
      (set! (. ctx -font) font-string)
      (.fillText ctx string x y)))
  ([canvas string x y]
    (draw-string canvas string x y default-font)))

;;Game Drawing
(defn screen-coordinates [grid-size border-width game-coordinates]
  (map #(+ border-width (* grid-size %)) game-coordinates))

(defn draw-board
  [canvas]
  (let [{:keys [height width border-width]} canvas]
    (set-fill-color canvas (color :blue :dark))
    (doall (map (partial draw-box canvas)
                [[0 0 width border-width]
                 [0 0 border-width height]
                 [0 (- height border-width) width border-width]
                 [(- width border-width) 0 border-width height]]))))

(defn draw-score [state canvas]
  (set-fill-color canvas (color :white))
  (draw-string canvas (str "Score: " (:length (:snake state))) 0 10))

(defn erase-message
  "Hack around the issue demonstrated here: http://jsfiddle.net/6ZKqw/4/
   Filling white text over text leaves a ghost outline of the text"
  [state canvas]
  (let [m (:message state) t (:text m) s (:subtext m)
        x 230 ty 230 sy 264 tf "bold 24px sans-serif"]
  (set-fill-color canvas (color :white))
  (draw-string canvas t (- x 1) ty tf)
  (draw-string canvas t (+ x 1) ty tf)
  (draw-string canvas t x (- ty 1) tf)
  (draw-string canvas t x (+ ty 1) tf)
  (draw-string canvas s (- x 1) sy)
  (draw-string canvas s (+ x 1) sy)
  (draw-string canvas s x (- sy 1))
  (draw-string canvas s x (+ sy 1))))

(defn draw-message [state canvas]
  (let [message (:message state)
        text (:text message)
        subtext (:subtext message)
        [color-name modifier] (:color message)]
    (if message
      (if (:erase? message)
        (erase-message state canvas)
        (do
          (set-fill-color canvas (color color-name modifier))
          (draw-string canvas text 230 230 "bold 24px sans-serif")
          (draw-string canvas subtext 230 264))))))

(defn draw-snake-segment [canvas segment]
  (let [{:keys [grid-size border-width]} canvas
        [x y] (screen-coordinates grid-size border-width segment)]
    (draw-box canvas x y grid-size grid-size)))

(defn draw-snake [state canvas]
  (let [snake (:snake state)
        body (:body snake)]
    (if (not (:grew? snake))
      (do
        (set-fill-color canvas (color :white))
        (draw-snake-segment canvas (:last-last snake))))
    (if (:alive? state)
      (do (set-fill-color canvas (color :blue))
          (draw-snake-segment canvas (first body)))
      (do
        (set-fill-color canvas (color :red))
        (doall (map (partial draw-snake-segment canvas) body))))))

(defn draw-pellet [state canvas]
  (let [{:keys [grid-size border-width]} canvas
        [x y] (screen-coordinates grid-size border-width (:pellet state))]
    (set-fill-color canvas (color :green))
    (draw-box canvas x y grid-size grid-size)))

(defn render [state canvas]
  (draw-board canvas)
  (draw-score state canvas)
  (draw-snake state canvas)
  (draw-pellet state canvas)
  (draw-message state canvas))
