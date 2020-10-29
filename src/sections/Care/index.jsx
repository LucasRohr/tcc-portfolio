import React from 'react'

import './care.scss'

import care from "../../assets/care.svg";

export default function Care() {
  return (
    <div className="care-container">
      <div className="care-explanation">
        <h1>Why to trust our solution?</h1>

        <span>
          We understand that asking for confidence in such a delicate challenge can be complicated. But we really want
          to make a change in the digital legacy scenario. We want this because it is a growing problem that can
          affect people in many ways, including the emotional way.
        </span>

        <span>
          The fact that so many memories and unremarkable moments are within our digital patrimony, we want to offer a
          system that can enable a digital legacy process in a secure and agile way, a way that everyone can trust
          and make the best of.
        </span>

        <span>This is what moves us, this is what makes us really care.</span>
      </div>

      <img className="care-illustration" src={care} alt="Problem Illustration" />
    </div>
  )
}
