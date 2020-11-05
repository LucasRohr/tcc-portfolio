import React from "react";
import audience from "../../assets/audience.svg";

import "./audience.scss";

const Audience = () => (
  <div className="audience-container">
    <h1 className="audience-title">Who is our public?</h1>

    <div className="audience-wrapper">
      <span className="audience-explanation">
        We develop this solution to a wide range of people, that's because most os us have a digital patrimony nowadays,
        we all have potential digital legacy. This happens because of the present technology in our lives and the
        preciosity of the amount of data we produce to us. So everything a person must have to be part of our public is
        valuable digital data. We understand that most people start to build a more solid patrimony over age, so our
        main focus are people with more than 18 years-old.
      </span>

      <img className="audience-icon" src={audience} alt="Application public" />

      <span className="audience-explanation">
        At the adult age, we percieve the expressive value of our digital goods, which can be emotional, like memories, and of
        course, economic. This last aspect is important because a considerable amount of definitions for patrimony uses
        the monetary value as a condition to it. Those digital economic goods vary from data that has value itself or
        credentials for bank accounts, for example.
      </span>
    </div>
  </div>
);

export default Audience;
