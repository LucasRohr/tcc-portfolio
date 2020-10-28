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
            Hello! This portfolio can help you understand about the digital heritage system
          </span>

          <span className="begin-subtitle">
            This TCC is being develop by the students Douglas Oliveira and Lucas Rohr
          </span>
        </div>
      </div>
    </div>
  );
}
