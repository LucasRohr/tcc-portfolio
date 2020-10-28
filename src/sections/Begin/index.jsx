import React from "react";

import './begin.scss';

import logo from "../../assets/logo.svg";

export default function Begin() {
  return (
    <div className="begin-container">
      <div className="begin-info-container">
        <img className="logo-icon" alt="Logo" src={logo} />
        <div>
          <span className="begin-title">
            Digital Legacy System
          </span>

          <span className="begin-subtitle">
            Hello! This portfolio can help you understand about our project
          </span>

          <span className="begin-authors">
            Douglas Oliveira && Lucas Rohr, 2020-21
          </span>
        </div>
      </div>
    </div>
  );
}
