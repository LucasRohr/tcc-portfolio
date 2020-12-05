import React from 'react'

import './golden-circle.scss'
export default function GoldenCircle() {
  return (
    <div className="golden-circle-container">
      <h1 className="golden-circle-title">What is our Golden Circle?</h1>
      <div className="golden-circle-itself-container">
        <div className="golden-circle-itself-left">
          <div className="circle what">
            <span>What?</span>
            <div className="circle how">
              <span>How?</span>
              <div className="circle why">
                <span>Why?</span>
              </div>
            </div>
          </div>
        </div>
        <div className="golden-circle itself-right">

        </div>
      </div>
    </div>
  )
}
