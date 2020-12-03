import React from 'react'

import './care.scss'

import care from "../../assets/care.svg";

export default function Care() {
  return (
    <div className="care-container">
      <div className="care-explanation">
        <h1>Why to trust our solution?</h1>

        <span>
          We respect and acknowledge the importance of taking care of your Digital Legacy.
          This is our objective because it is a growing problem that can
          affect people in many ways, including the emotional way.
        </span>

        <span>
          Our system will be safe and trustworthy in order to people make their memories and unremarkable moments
          live forever for the ones who you care and love. But it also will be agile to make this happen
        </span>

        <span>
          Ensuring the planning and the care for your Digital Legacy is what moves us, 
          this is what makes us really care.
        </span>
      </div>

      <img className="care-illustration" src={care} alt="Problem Illustration" />
    </div>
  )
}
