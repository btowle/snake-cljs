(ns snake-cljs.core
  (:require [clojure.string :as string]
            [goog.dom :as dom]
            [goog.Timer :as timer]
            [goog.events :as events]
            [goog.events.EventType :as event-type]))
(enable-console-print!)

(defn canvas []
  (let [canvas (dom/getElement "canvas")]
    {:canvas canvas
     :context (.getContext canvas "2d")
     :width (. canvas -width)
     :height (. canvas -height)}))

(defn rgba-string
  ([r g b a]
    (str "rgba(" (string/join "," [r g b a]) ")"))
  ([r g b]
   (rgba-string r g b 255)))

(defn clear-canvas! [canvas]
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

(defn draw-board
  [canvas]
  (set-fill-color canvas 0 0 100)
  (draw-box canvas 0 0 (:width canvas) (:height canvas))
  (.clearRect (:context canvas)
              32 32 (- (:width canvas) 64) (- (:height canvas) 64)))

(defn draw-fps [canvas state]
  (let [ctx (:context canvas)]
    (set-fill-color canvas 255 255 255)
    (set! (. ctx -font) "bold 12px sans-serif")
    (.fillText ctx (str "fps: " (:fps (:time @state))) 0 10)))

(defn render [canvas state]
  (clear-canvas! canvas)
  (draw-board canvas)
  (draw-fps canvas state)
  ;;(draw-score canvas state)
  ;;(draw-snake canvas state)
  )

(defn get-time
  ([old-time]
    (let [now (.getTime (js/Date.))
          delta (- now (:wall old-time))]
      {:wall now :delta delta :fps (/ 1000 delta)}))
  ([]
    (get-time {:wall (.getTime (js/Date.))
               :delta 0
               :fps 0})))

(defn update-time [state]
  (swap! state assoc :time (get-time (:time @state))))

(defn initial-state []
  {:time (get-time)})

(defn on-tick [canvas state]
  (update-time state)
  (render canvas state))

(defn ^:export init []
  (let [canvas (canvas)
        timer (goog.Timer. (/ 1000 250))
        state (atom (initial-state))]
    (. timer start)
    (events/listen timer
                   goog.Timer/TICK
                   #(on-tick canvas state))))
