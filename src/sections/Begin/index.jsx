import React from "react";

import './begin.scss';

import logo from "../../assets/logo.svg";

export default function Begin() {
  return (
    <div className="begin-container">
      <div className="begin-info-container">
        <div>
          <img className="logo-icon" alt="Logo" src={logo} />
          <div>
            <span className="begin-title">
              Digital Legacy System
            </span>

            <span className="begin-subtitle">
              Welcome to a nice introduction to our project
            </span>
          </div>
        </div>
        <span className="begin-authors">
          Douglas Oliveira && Lucas Rohr, 2020-21
        </span>
      </div>
    </div>
  );
}
