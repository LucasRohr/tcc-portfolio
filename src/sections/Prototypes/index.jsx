import React from 'react';

import './prototypes.scss';

import mediasPrototype from "../../assets/medias_prototype.jpg";
import warningPrototype from "../../assets/warning_prototype.jpg";

export default function Prototypes() {
  return (
    <div className="protypes-container">
      <h1>Here are some already developed screen prototypes</h1>

      <div className="prototype-row">
        <div className="prototype-row-content">
          <span>Medias management</span>
          <img src={mediasPrototype} alt="Solution Illustration" />
        </div>
      </div>

      <div className="prototype-row">
        <div className="prototype-row-content-warning">
          <img src={warningPrototype} alt="Solution Illustration" />
          <span>Deceased owner Digital Certificate validation</span>
        </div>
      </div>
    </div>
  )
}
