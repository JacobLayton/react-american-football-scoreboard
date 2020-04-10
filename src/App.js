//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
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

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionScore}</div>
          </div>
          <div className="timer">00:03</div>
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
          <button className="moreButtons__togoInc">To Go +</button>
          <button className="moreButtons__togoDec">To Go -</button>
          <button className="moreButtons__ballonInc">Ball On +</button>
          <button className="moreButtons__ballonDec">Ball On -</button>
          <button className="moreButtons__quarter">Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;
