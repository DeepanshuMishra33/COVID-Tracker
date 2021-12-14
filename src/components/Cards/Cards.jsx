import React from "react";
import CountUp from 'react-countup';
import "./Cards.css";
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "loading...";
  }

  return (
    <div className="container">
      <div className="card infected">
        <div className="card-body">
          <h5 className="card-title">
              <CountUp
              start={0}
              end={confirmed.value}
              duration={2.5}
              separator=","
              />
          </h5>
          <h6 className="card-text">
            Number of active cases of COVID-19.
          </h6>
          <p>last updated : {new Date(lastUpdate).toDateString()}</p>
        </div>
      </div>
      <div className="card recovered">
        <div className="card-body">
        <h5 className="card-title">
              <CountUp
              start={0}
              end={recovered.value}
              duration={2.5}
              separator=","
              />
          </h5>
          <h6 className="card-text">
            Number of patients  recovered from COVID-19.
          </h6>
          <p> last updated: {new Date(lastUpdate).toDateString()} </p>
        </div>
      </div>
      <div className="card deaths">
        <div className="card-body">
        <h5 className="card-title">
              <CountUp
              start={0}
              end={deaths.value}
              duration={2.5}
              separator=","
              />
          </h5>
          <h6 className="card-text">
            Number of deaths caused by COVID-19.
          </h6>
          <p>last updated: {new Date(lastUpdate).toDateString()}</p>
        </div>
      </div>
    </div>
  );
};
export default Cards;
