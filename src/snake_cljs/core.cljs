(ns snake-cljs.core
  (:require [goog.Timer :as timer]
            [goog.events :as events]
            [goog.events.EventType :as event-type]
            [snake-cljs.rendering :refer [canvas render]]))

(def ^:const canvas-width 640)
(def ^:const canvas-height 480)
(def ^:const grid-size 8)
(def ^:const border-width 32)

(def ^:const update-latency 50)
(def ^:const growth-per-pellet 5)
(def ^:const initial-length 5)

(enable-console-print!)

;;Timer
(defn get-time
  ([old-time]
    (let [now (.getTime (js/Date.))
          delta (- now (:wall old-time))
          last-update (+ (:last-update old-time) delta)]
      {:wall now
       :delta delta
       :last-update last-update}))
  ([]
    (get-time {:wall (.getTime (js/Date.))
               :delta 0
               :last-update 0})))

(defn update-time [state]
  (assoc state :time (get-time (:time state))))

(defn zero-last-update [state]
  (assoc state :time (assoc (:time state) :last-update 0)))

;;Game
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
               :snake (assoc snake :growth (+ (:growth snake) growth-per-pellet))
               :pellet (pellet snake width height))
        state)))

(def direction-fns
  {:up (fn [[x y] coordinate] [x (- y 1)])
   :right (fn [[x y] coordinate] [(+ x 1) y])
   :down (fn [[x y] coordinate] [x (+ y 1)])
   :left (fn [[x y] coordinate] [(- x 1) y])
   :none identity})

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
                                   :length (+ (:length snake) 1)
                                   :grew? true))
        (assoc state :snake (assoc snake
                                   :body (cons new-head (butlast body))
                                   :grew? false
                                   :last-last (last body)))))))

(defn update-board [state]
  (-> state
      zero-last-update
      move-snake
      die-on-collision
      eat-pellet))

(defn snake [grid-width grid-height]
  {:growth (- initial-length 1)
   :last-last [0 0]
   :grew? true
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
    (do
      (swap! state update-board)
      (render @state canvas))))

(defn on-keydown [state canvas event]
  (let [key-to-direction {37 :left  65 :left  100 :left
                          38 :up    87 :up    104 :up
                          39 :right 68 :right 102 :right
                          40 :down  83 :down  98 :down}
        key-code (. event -keyCode)]
    (swap! state assoc :direction (or (key-to-direction key-code)
                                      (:direction @state)))))

(defn ^:export init []
  (let [canvas (canvas canvas-width canvas-height grid-size border-width)
        timer (goog.Timer. (/ 1000 250))
        state (atom (initial-state))]
    (. timer start)
    (events/listen timer
                   goog.Timer/TICK
                   #(on-tick state canvas))
    (events/listen (:canvas canvas)
                   event-type/KEYDOWN
                   #(on-keydown state canvas %))))
