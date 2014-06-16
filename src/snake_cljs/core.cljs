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
(def ^:const update-latency 250)

;;JS interop
(enable-console-print!)

(defn canvas []
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
  ([canvas x y w]
    (draw-box x y w w)))

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
    (.fillText ctx (str "fps: " (:fps (:time state))) 0 22)))

(defn draw-score [state canvas]
  (let [ctx (:context canvas)]
    (set-fill-color canvas 255 255 255)
    (set! (. ctx -font) "bold 12px sans-serif")
    (.fillText ctx (str "Score: " (:length (:snake state))) 0 10)))

(defn draw-snake-segment [canvas segment]
  (let [[x y] (screen-coordinates segment)]
    (draw-box canvas x y grid-size grid-size)))

(defn draw-snake [state canvas]
  (let [snake (:snake state)
        body (:body snake)]
    (if (:alive? state)
      (set-fill-color canvas 0 0 255)
      (set-fill-color canvas 255 0 0))
    (doall (map (partial draw-snake-segment canvas) (:body (:snake state))))))

(defn draw-pellet [state canvas]
  (let [[x y] (-> state :pellet screen-coordinates)]
    (set-fill-color canvas 0 255 0)
    (draw-box canvas x y grid-size grid-size)))

(defn render [state canvas]
  (clear-canvas canvas)
  (draw-board canvas)
  (draw-score state canvas)
  (draw-fps state canvas)
  (draw-snake state canvas)
  (draw-pellet state canvas))

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

(defn zero-last-update [state]
  (assoc state :time (assoc (:time state) :last-update 0)))

;;Game
(def direction-fns
  {:up (fn [[x y] coordinate] [x (- y 1)])
   :right (fn [[x y] coordinate] [(+ x 1) y])
   :down (fn [[x y] coordinate] [x (+ y 1)])
   :left (fn [[x y] coordinate] [(- x 1) y])
   :none identity})

(defn collide-wall? [state]
  (let [body (-> state :snake :body)
        [x y] (first body)
        {:keys [width height]} (:map-size state)]
    (or (< x 0) (< y 0) (>= x width) (>= y height))))

(defn collide-self? [state]
  (let [body (-> state :snake :body)]
    (some #(= (first body) %) (rest body))))

(defn die-on-collision [state]
  (assoc state :alive? (not (or (collide-wall? state) (collide-self? state)))))

(defn valid-pellet [grid-width grid-height snake pellet]
  (not-any? #(= pellet %) (:body snake)))

(defn pellet [snake grid-width grid-height]
  (first (filter (partial valid-pellet grid-width grid-height snake)
                 (repeatedly #(vector (rand-int grid-width)
                                      (rand-int grid-height))))))

(defn collide-pellet? [state]
  (= (-> state :snake :body first) (:pellet state)))

(defn eat-pellet [state]
  (let [snake (:snake state)
        {:keys [width height]} (:map-size state)]
    (if (collide-pellet? state)
        (assoc state
               :snake (assoc snake :growth (+ (:growth snake) 1))
               :pellet (pellet snake width height))
        state)))

(defn check-collision [state]
  (-> state die-on-collision eat-pellet))

(defn move-snake [state]
  (let [snake (:snake state)
        body (:body snake)
        direction (:direction state)
        new-head ((direction-fns direction) (first body))]
    (if (= direction :none)
      state
      (if (> (:growth snake) 0)
        (assoc state :snake (assoc snake
                                   :body (cons new-head body)
                                   :growth (- (:growth snake) 1)
                                   :length (+ (:length snake) 1)))
        (assoc state :snake (assoc snake
                                   :body (cons new-head (butlast body))))))))

(defn update-board [state]
  (-> state
      zero-last-update
      move-snake
      check-collision))

(defn snake [grid-width grid-height]
  {:growth 4
   :length 1
   :body [[(/ grid-width 2) (/ grid-height 2)]]})

(defn initial-state []
  (let [grid-width (/ (- canvas-width (* 2 border-width)) grid-size)
        grid-height (/ (- canvas-height (* 2 border-width)) grid-size)
        snake (snake grid-width grid-height)]
    {:time (get-time)
     :map-size {:width grid-width
                :height grid-height}
     :snake snake
     :pellet (pellet snake grid-width grid-height)
     :direction :none
     :alive? true}))

;;Gameloop/Events
(defn on-tick [state canvas]
  (swap! state update-time)
  (if (and (:alive? @state) (> (:last-update (:time @state)) update-latency))
    (swap! state update-board))
  (render @state canvas))

(defn on-keydown [state canvas event]
  (let [key-to-direction {37 :left  65 :left  100 :left
                          38 :up    87 :up    104 :up
                          39 :right 68 :right 102 :right
                          40 :down  83 :down  98 :down}
        key-code (. event -keyCode)]
    (swap! state assoc :direction (or (key-to-direction key-code)
                                      (:direction @state)))))

(defn ^:export init []
  (let [canvas (canvas)
        timer (goog.Timer. (/ 1000 250))
        state (atom (initial-state))]
    (. timer start)
    (events/listen timer
                   goog.Timer/TICK
                   #(on-tick state canvas))
    (events/listen (:canvas canvas)
                   event-type/KEYDOWN
                   #(on-keydown state canvas %))))
