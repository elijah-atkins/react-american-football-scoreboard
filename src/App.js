//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
function secondsToTime(secs){
  let hours = Math.floor(secs / (60 * 60));

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    "h": hours,
    "m": minutes,
    "s": seconds
  };
  return obj;
}
function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHome] = useState(0);
  const [awayScore, setAway] = useState(0);
  const [counter, setCounter] = useState(4500)
  const [pause, setPause] = useState(false)
  useEffect(()=>{
    if (!pause){
      const timer =
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
    }
  }, [counter]);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

  <div className="home__score">{homeScore}</div>
          </div>
  <div className="timer">{secondsToTime(counter).m}:{secondsToTime(counter).s}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
  <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={()=> setHome(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={()=> setHome(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={()=> setAway(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={()=> setAway(awayScore + 3)}>Away Field Goal</button>
        </div>
        <div className="timerButtons">
          <button className="resetTimerButton" onClick={()=>{
            setCounter(4500)
          }}>Reset Timer</button>
        </div>
      </section>
    </div>
  );
}

export default App;
