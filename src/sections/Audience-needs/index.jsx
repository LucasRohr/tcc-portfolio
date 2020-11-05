import React from "react";
import legacy from "../../assets/legacy.svg";

import "./audience-needs.scss";

const AudienceNeeds = () => (
  <div className="audience-needs-container">
    <h1>And what our public needs?</h1>

    <div className="audience-needs-wrapper">
      <span className="audience-needs-explanation">
        Our focus is to help people who want to plan and organize their digital legacy, but also for people who don't
        know about, a great percentual, and present them to this reality, so we can offer them a tool to handle it. Our
        system will not solve the digital legacy issue, but it will help to ease it.
      </span>

      <img className="audience-needs-icon" src={legacy} alt="Application public needs" />

      <span className="audience-needs-explanation">
        We aim to make people management of the legacy agile and secure, for every kind of user: people who want to
        save precious photos and videos of loved ones, important documents from family or work, online accounts
        credentials and many more needs that people may have regarding their digital legacy.
      </span>
    </div>

    <div className="audience-needs-bottom-explanations-wrapper">
      <span className="audience-needs-larger-explanation">
        So as we can see, the values of our users are numerous, from people who praise the emotional memories above all
        else to people who are woried about the future of their digital economic goods when they are gone. These values
        can be fit in the solutiom design because, as already described, people can save in our safe storage many types
        of data, from precious moments records to economic goods access, so they aren't lost when the owner passes away.
      </span>

      <span className="audience-needs-larger-explanation">
        By doing so, we want to help our users to achieve their goals as digital patrimony owners. These objectives can
        be numerous, but they are part of one primary objective: pass your digital identity and goods to people that you
        love or care, so they will not be lost in a data sea and your legacy will remain alive in an
        increasingly technological world.
      </span>
    </div>
  </div>
);

export default AudienceNeeds;
