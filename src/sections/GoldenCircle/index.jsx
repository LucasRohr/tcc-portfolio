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
        <div className="golden-circle-itself-right">
          <ul>
            <li>Because we care about your affection to your memories, information and digital integrity.</li>
            <li>By developing a safe, practical and descentralized Digital Legacy system.</li>
            <li>We present you an application where you can store your files and social media creations for your heirs to access after you pass away.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
