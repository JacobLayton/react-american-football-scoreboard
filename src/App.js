//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionScore, setLionScore] = useState(0);
  const [tigerScore, setTigerScore] = useState(0);
  const [currentDown, setCurrentDown] = useState(1);
  const [yardsToGo, setYardsToGo] = useState(10);
  const [ballOnYard, setBallOnYard] = useState(50);
  const [quarter, setQuarter] = useState(1);
  const [minutes, setMinutes] = useState(12);
  const [tensSeconds, setTensSeconds] = useState(0);
  const [onesSeconds, setOnesSeconds] = useState(0);
  const [clockRunning, setClockRunning] = useState(false);

  useEffect(() => {
    if (clockRunning) {
      setTimeout(() => {
        runClock();
      }, 1000);
    }
  });

  function runClock() {
    if (minutes > 0 || tensSeconds > 0 || onesSeconds > 0) {
      runOnesSeconds();
    }
  }

  function runOnesSeconds() {
    if (onesSeconds === 0) {
      setOnesSeconds(9);
      runTensSeconds();
    } else {
      setOnesSeconds(onesSeconds - 1);
    }
  }

  function runTensSeconds() {
    if (tensSeconds === 0) {
      setTensSeconds(5);
      setMinutes(minutes - 1);
    } else {
      setTensSeconds(tensSeconds - 1);
    }
  }

  function resetClock() {
    setMinutes(12);
    setTensSeconds(0);
    setOnesSeconds(0);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionScore}</div>
          </div>
          <div className="timer">
            {minutes}:{tensSeconds}
            {onesSeconds}
          </div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerScore}</div>
          </div>
        </div>
        <BottomRow
          currentDown={currentDown}
          yardsToGo={yardsToGo}
          ballOnYard={ballOnYard}
          quarter={quarter}
        />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={() => setLionScore(lionScore + 7)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setLionScore(lionScore + 3)}
          >
            Home Field Goal
          </button>
        </div>
        <div className="moreButtons">
          <button
            className="moreButtons__down"
            onClick={() =>
              currentDown === 4
                ? setCurrentDown(currentDown - 3)
                : setCurrentDown(currentDown + 1)
            }
          >
            Down
          </button>
          <button
            className="moreButtons__togoInc"
            onClick={() => setYardsToGo(yardsToGo + 1)}
          >
            To Go +
          </button>
          <button
            className="moreButtons__togoDec"
            onClick={() => setYardsToGo(yardsToGo - 1)}
          >
            To Go -
          </button>
          <button
            className="moreButtons__ballonInc"
            onClick={() => setBallOnYard(ballOnYard + 1)}
          >
            Ball On +
          </button>
          <button
            className="moreButtons__ballonDec"
            onClick={() => setBallOnYard(ballOnYard - 1)}
          >
            Ball On -
          </button>
          <button
            className="moreButtons__quarter"
            onClick={() =>
              quarter === 4 ? setQuarter(quarter - 3) : setQuarter(quarter + 1)
            }
          >
            Quarter
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => setTigerScore(tigerScore + 7)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => setTigerScore(tigerScore + 3)}
          >
            Away Field Goal
          </button>
        </div>
      </section>
      <section>
        <div className="clockButtons">
          <button
            className="startClockButton"
            onClick={() => setClockRunning(true)}
          >
            Start Clock
          </button>
          <button
            className="stopClockButton"
            onClick={() => setClockRunning(false)}
          >
            Stop Clock
          </button>
          <button className="ResetClockButton" onClick={() => resetClock()}>
            Reset Clock
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
