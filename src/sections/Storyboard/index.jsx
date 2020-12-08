import React from "react";

import "./storyboard.scss";

import storyboardImage from "../../assets/storyboard.jpg";

export default function Storyboard() {
  return (
    <div className="storyboard-container">
      <div className="storyboard-title-container">
        <h1>Our Storyboard</h1>
        <h2>How can our solution help to solve a problem in someone's life?</h2>
      </div>

      <div className="storyboard-image-container">
        <img src={storyboardImage} alt="Storyboard" />
      </div>
    </div>
  );
}
