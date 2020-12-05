import React from "react";

import "./empathy-map.scss";

import empathyUser from "../../assets/empathy-user.svg"

export default function EmpathyMap() {
  return (
    <div className="empathy-map-container">
      <h1 className="empathy-map-title">Our Empathy Map</h1>

      <div className="section-separator" />

      <div className="empathy-map-body">
        <div className="empathy-map-row">
          <div className="separator top-left-separator" />

          <div className="empathy-map-card">
            <h2>What the user think and feel?</h2>

            <span>
              <ul>
                <li>
                  This person main preocupations are their marks in this world, and now more than ever, the marks are
                  digital
                </li>
                <li>Their memories and valuable digital patrimony really counts</li>
                <li>They are not aware about the issue around  the Digital Legacy</li>
              </ul>
            </span>
          </div>

          <div className="separator top-right-separator" />
        </div>

        <div className="empathy-map-row">
          <div className="middle-card-left">
            <h2>What does they hear?</h2>

            <span>
              <ul>
                <li>News on the internet and television about the growing usage of technology</li>
                <li>How your online-self represents their true-self</li>
              </ul>
            </span>

            <div className="separator bottom-left-separator" />
          </div>

          <div className="empathy-user-icon-wrapper">
            <img className="empathy-user-icon" src={empathyUser} alt="Empathy user" />
          </div>

          <div className="middle-card-right">
            <h2>What does they see?</h2>

            <span>
              <ul>
                <li>They care for their data and files</li>
                <li>A world being much more digitally centered than ever before</li>
              </ul>
            </span>

            <div className="separator bottom-right-separator" />
          </div>
        </div>

        <div className="empathy-map-bottom-container">
          <div className="empathy-map-say-do">
            <h2>What they say and do?</h2>

            <span>
              The user is very familiar to technology, having a lot of data and files in their personal devices and online services, 
              such as social medias. They say that their digital assets (not in that word) are very important to them.
            </span>
          </div>

          <div className="empathy-map-bottom-separator-horizontal"></div>

          <div className="empathy-map-bottom-content">
            <div className="empathy-map-bottom-card">
              <h2>Pains</h2>

              <span>
                <ul>
                  <li>Not being sure how to make his data available for his family and friends in a posthumous scenario after realising about the issue.</li>
                  <li>Sensible data safety and integrity</li>
                  <li>To understand about Digital Legacy</li>
                </ul>
              </span>
            </div>

            <div className="empathy-map-bottom-separator"></div>

            <div className="empathy-map-bottom-card">
              <h2>Gains</h2>

              <span>
                <ul>
                  <li>To have an easy-to-use and agile system</li>
                  <li>Have a secured digital legacy</li>
                  <li>Plan and organize digital items and heirs</li>
                  <li>Keeping their data manageable for their trusted ones</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-separator" />
    </div>
  );
}
