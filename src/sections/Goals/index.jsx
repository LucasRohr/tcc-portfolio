import React from 'react';

import './goals.scss';

import goal from "../../assets/goal.png";

export default function Goals() {
  return (
    <div className="goals-container">
      <img className="goal-image" alt="Goal" src={goal} />

      <div className="goal-explanation">
        <span className="goal-inner-text">
          <b>This project can be fit into the ninth global goal sustainable development.</b> Which means that the main focus of
          the project is to develop a innovative solution for a problem.
        </span>
        <span className="goal-inner-text">
          <b>But what is our problem to be solved here?</b> We choose to develop a system to help with the process of digital legacy. But now,
          you may ask yourself. What is this?
        </span>
        <span className="goal-inner-text">
          Well, briefly, we all accumulate digital goods throughout our lives, such as photos, documents and social media. <b>But what happens to our most valuable
          components of the digital patrimony is often undefined nowadays.</b>
        </span>
      </div>
    </div>
  )
}
