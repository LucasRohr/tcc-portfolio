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
          Is it removed from databases? Is it protected? <b>And what if I had the wish to pass to a loved one some
          important documents and medias, like photos and videos?</b>
          <br />
          <br />
          When we explained that the digital legacy, when integrated in a well designed system, can ensure a safe
          passage of data from an owner to their heirs, people immediatly answered that the digital legacy
          question is important.
          <br />
          <br />
          And in fact it is. We live in a world full of more digital data everyday. And a lot of it, without
          destination, can be a huge problem, from servers delays to people trying to access data that is protected by
          the deceased credentials that they might do not have.
        </span>
      </div>

      <div className="observe-images-container">
        <img alt="Network" src={network} />
        <img alt="Internet" src={internet} />
      </div>
    </div>
  )
}
