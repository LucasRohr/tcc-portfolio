import React from "react";

import "./empathy-map.scss";

import empathyUser from "../../assets/empathy-user.svg";

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
                <li>She/he feel worried about how to pass away lifetime data</li>
              </ul>
            </span>
          </div>

          <div className="separator top-right-separator" />
        </div>

        <div className="empathy-map-row">
          <div className="middle-card-left">
            <h2>What does she/he hear?</h2>

            <span>
              <ul>
                <li>News on the internet and television about the growing usage of technology</li>
                <li>Doesn't hear close people talking about digital legacy</li>
                <li>Hears about the theme on searches</li>
              </ul>
            </span>

            <div className="separator bottom-left-separator" />
          </div>

          <div className="empathy-user-icon-wrapper">
            <img className="empathy-user-icon" src={empathyUser} alt="Empathy user" />
          </div>

          <div className="middle-card-right">
            <h2>What does she/he see?</h2>

            <span>
              <ul>
                <li>This person see his/her digital patrimony as an important part of life</li>
                <li>Sees that few services of digital legacy exist</li>
                <li>
                  Also notices that safety of digital data is crutial in a legacy system, because of sensible data
                </li>
              </ul>
            </span>

            <div className="separator bottom-right-separator" />
          </div>
        </div>

        <div className="empathy-map-bottom-container">
          <div className="empathy-map-say-do">
            <h2>What she/he say and do?</h2>

            <span>
              This person can be like any of us. She/he can work in any area, like IT or marketing. As well as being an
              extrovert or introvert person. The user has family and friends who really are important, they want to pass
              the digital patrimony to them.
            </span>
          </div>

          <div className="empathy-map-bottom-separator-horizontal"></div>

          <div className="empathy-map-bottom-content">
            <div className="empathy-map-bottom-card">
              <h2>Pains</h2>

              <span>
                <ul>
                  <li>How to pass away digital legacy</li>
                  <li>Sensible data safety</li>
                  <li>How the system knows when I pass away?</li>
                </ul>
              </span>
            </div>

            <div className="empathy-map-bottom-separator"></div>

            <div className="empathy-map-bottom-card">
              <h2>Gains</h2>

              <span>
                <ul>
                  <li>Easy-to-use and agile system</li>
                  <li>Have a secured digital legacy</li>
                  <li>Plan and organize digital items and heirs</li>
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
