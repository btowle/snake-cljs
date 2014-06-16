(ns snake-cljs.rendering
  (:require [clojure.string :as string]
            [goog.dom :as dom]))

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
   (rgba-string r g b 255)))

(defn set-fill-color
  ([canvas rgba]
    (set! (. (:context canvas) -fillStyle) rgba))
  ([canvas r g b & a]
    (if (nil? a)
      (set-fill-color canvas (rgba-string r g b))
      (set-fill-color canvas (rgba-string r g b (first a))))))

(defn draw-box
  ([canvas x y w h]
    (.fillRect (:context canvas) x y w h))
  ([canvas x y w]
    (draw-box x y w w)))

;;Game Drawing
(defn screen-coordinates [grid-size border-width game-coordinates]
  (map #(+ border-width (* grid-size %)) game-coordinates))

(defn draw-board
  [canvas]
  (let [{:keys [height width border-width]} canvas]
    (set-fill-color canvas 0 0 100)
    (draw-box canvas 0 0 width border-width)
    (draw-box canvas 0 0 border-width height)
    (draw-box canvas 0 (- height border-width) width border-width)
    (draw-box canvas (- width border-width) 0 border-width height)))

(defn draw-score [state canvas]
  (let [ctx (:context canvas)]
    (set-fill-color canvas 255 255 255)
    (set! (. ctx -font) "bold 12px sans-serif")
    (.fillText ctx (str "Score: " (:length (:snake state))) 0 10)))

(defn draw-snake-segment [canvas segment]
  (let [{:keys [grid-size border-width]} canvas
        [x y] (screen-coordinates grid-size border-width segment)]
    (draw-box canvas x y grid-size grid-size)))

(defn draw-snake [state canvas]
  (let [snake (:snake state)
        body (:body snake)]
    (if (not (:grew? snake))
      (do
        (set-fill-color canvas 255 255 255)
        (draw-snake-segment canvas (:last-last snake))))
    (if (:alive? state)
      (do (set-fill-color canvas 0 0 255)
          (draw-snake-segment canvas (first body)))
      (do
        (set-fill-color canvas 255 0 0)
        (doall (map (partial draw-snake-segment canvas) body))))))

(defn draw-pellet [state canvas]
  (let [{:keys [grid-size border-width]} canvas
        [x y] (screen-coordinates grid-size border-width (:pellet state))]
    (set-fill-color canvas 0 255 0)
    (draw-box canvas x y grid-size grid-size)))

(defn render [state canvas]
  (draw-board canvas)
  (draw-score state canvas)
  (draw-snake state canvas)
  (draw-pellet state canvas))
