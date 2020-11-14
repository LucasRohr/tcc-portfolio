import React from "react";
import audience from "../../assets/audience.svg";

import "./audience.scss";

const Audience = () => (
  <div className="audience-container">
    <h1 className="audience-title">Who is our public?</h1>

    <div className="audience-wrapper">
      <div className="audience-explanation sidetext">
        <h1>The Owners</h1>
        The owner belongs to a group of people which possess digital assets economically or emotionally valuable, which makes these people
        concerned about the fate of this property and wanting to keep them accessible. These people have a further nearness with the digital 
        technologies of nowadays. The owners care for their assets and their online integrity, aiming to appoint their heirs as the ones who 
        will keep their digital legacy.
      </div>

      <img className="audience-icon" src={audience} alt="Application public" />

      <div className="audience-explanation sidetext">
        <h1>The Heirs</h1>
        The heirs are people aware of the importance and both economical and emotional value of the digital assets from their owners.
        These people have few or none taboos related to death, being able to establish a posthumous interaction with data and notes
        inherited from the owner. Heirs, depending on the responsibilities assigned by the owner, are willing to make the owner's digital 
        posthumous wishes true or only keep his digital assets alive.
      </div>
    </div>
  </div>
);

export default Audience;
