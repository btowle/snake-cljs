(ns snake-cljs.core
  (:require [clojure.string :as string]
            [goog.dom :as dom]
            [goog.Timer :as timer]
            [goog.events :as events]
            [goog.events.EventType :as event-type]))

(def ^:const grid-size 8)
(def ^:const border-width 32)
(def ^:const canvas-width 640)
(def ^:const canvas-height 480)

;;JS interop
(enable-console-print!)

#_(defn canvas []
  (let [canvas (dom/getElement "canvas")]
    {:canvas canvas
     :context (.getContext canvas "2d")
     :width (. canvas -width)
     :height (. canvas -height)}))

(defn canvas []
  (let [container (dom/getElement "canvas-container")
        canvas (dom/htmlToDocumentFragment
                            (str "<canvas id='canvas' "
                            "width='" canvas-width "' "
                            "height='" canvas-height
                            "'></canvas>"))]
    (dom/append container canvas)
    {:canvas canvas
     :context (.getContext canvas "2d")
     :width (. canvas -width)
     :height (. canvas -height)}))

(defn rgba-string
  ([r g b a]
    (str "rgba(" (string/join "," [r g b a]) ")"))
  ([r g b]
   (rgba-string r g b 255)))

(defn clear-canvas [canvas]
  (.clearRect (:context canvas) 0 0 (:width canvas) (:height canvas)))

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
  ([canvas {:keys [x y width height]}]
    (draw-box x y width height)))

;;Game Drawing
(defn screen-coordinates [game-coordinates]
  (map #(+ border-width (* grid-size %)) game-coordinates))

(defn draw-board
  [canvas]
  (set-fill-color canvas 0 0 100)
  (draw-box canvas 0 0 (:width canvas) (:height canvas))
  (.clearRect (:context canvas)
              border-width border-width
              (- (:width canvas) (* border-width 2))
              (- (:height canvas) (* border-width 2))))

(defn draw-fps [state canvas]
  (let [ctx (:context canvas)]
    (set-fill-color canvas 255 255 255)
    (set! (. ctx -font) "bold 12px sans-serif")
    (.fillText ctx (str "fps: " (:fps (:time state))) 0 10)))

(defn draw-snake-segment [canvas segment]
  (let [[x y] (screen-coordinates segment)]
    (draw-box canvas x y grid-size grid-size)))

(defn draw-snake [state canvas]
    (set-fill-color canvas 0 0 255)
    (doall (map (partial draw-snake-segment canvas) (:body (:snake state))))
  )

(defn render [state canvas]
  (clear-canvas canvas)
  (draw-board canvas)
  #_(draw-fps state canvas)
  ;;(draw-score state canvas)
  (draw-snake state canvas)
  )

;;Timer
(defn get-time
  ([old-time]
    (let [now (.getTime (js/Date.))
          delta (- now (:wall old-time))
          last-update (+ (:last-update old-time) delta)]
      {:wall now
       :delta delta
       :last-update last-update
       :fps (/ 1000 delta)}))
  ([]
    (get-time {:wall (.getTime (js/Date.))
               :delta 0
               :last-update 0
               :fps 0})))

(defn update-time [state]
  (assoc state :time (get-time (:time state))))

;;Game
(defn update-board [state canvas]
  (render state canvas)
  state)

(defn snake []
  {:growth 0
   :body [[2 2]]})

(defn initial-state []
  {:time (get-time)
   :map-size {:width (/ (- canvas-width border-width) grid-size)
              :height (/ (- canvas-height border-width) grid-size)}
   :snake (snake)})

(defn on-tick [state canvas]
  (swap! state update-time)
  (if (> (:last-update (:time @state)) 100)
    (swap! state update-board canvas)))

(defn ^:export init []
  (let [canvas (canvas)
        timer (goog.Timer. (/ 1000 250))
        state (atom (initial-state))]
    (. timer start)
    (events/listen timer
                   goog.Timer/TICK
                   #(on-tick state canvas))))
