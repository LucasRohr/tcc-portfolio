import React from 'react';

import './observe.scss';

import network from "../../assets/network.svg";
import internet from "../../assets/internet.svg";

export default function Observe() {
  return (
    <div className="observe-container">
      <div className="observe-explanation">
        <h2 className="observe-title"> What have we seen so far? </h2>

        <span className="observe-inner-text">
          In a research made in the month of April 2020, we have discovered that most people never thought about what
          happens to their data after they pass away.
          <br />
          <br />
          Is it removed from databases? Is it protected? <b>And what if I wish of leaving to a loved one some
          important documents and medias, like photos and videos?</b>
          <br />
          <br />
          When we explained that the digital legacy, when integrated in a well designed system, can ensure a safe
          passage of data from an owner to their heirs, 
          <b> people immediatly realised the importance of Digital Legacy.</b>
          <br />
          <br />
          And in fact it is. We live in a world full of more digital data everyday. 
          <b> 3.4 billion people will be connected to social media by 2023 </b>
          But already, <b>by 2012, around 19.000 Facebook users passed away in the USA.</b> 
        </span>
      </div>

      <div className="observe-images-container">
        <img alt="Network" src={network} />
        <img alt="Internet" src={internet} />
      </div>
    </div>
  )
}
