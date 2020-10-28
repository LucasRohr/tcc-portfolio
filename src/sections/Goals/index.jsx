import React from 'react';

import './goals.scss';

import goal from "../../assets/goal.png";

export default function Goals() {
  return (
    <div className="goals-container">
      <img className="goal-image" alt="Goal" src={goal} />

      <div className="goal-explanation">
        This project can be fit in the number nine goal of sustainable development. Wich means that the main focus of
        the project is to develop a innovative solution for a problem.
        <span className="goal-inner-text">
          But what is our problem here? We choose to develop a system to help with the digital heritage challenge. And
          what is it? <br /> <br />
          Well, breafly, we all accumulate digital goods throughout or lives, but what happens to our most valuable
          components of the digital patrimony when we pass away?
        </span>
      </div>
    </div>
  )
}
