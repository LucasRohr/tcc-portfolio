import React from "react";

import "./empathy-map.scss";

import carlosPic from "../../assets/coolguy1.jpg";

export default function EmpathyMap() {
  return (
    <div className="empathy-map-container">
      <h1 className="empathy-map-title">Our Empathy Map</h1>

      <div className="section-separator" />

      <div className="empathy-map-body">
        <div className="empathy-map-row">
          <div className="separator top-left-separator" />

          <div className="empathy-map-card">
            <h2>What the user think and feel?</h2>

            <span>
              <ul>
                <li>Carlos' main preocupations are his marks in this world through his work and memories</li>
                <li>His family memories and valuable digital patrimony, such as his literary intellectual property, really counts</li>
                <li>He feels worried about the fact he can not be alive tomorrow</li>
              </ul>
            </span>
          </div>

          <div className="separator top-right-separator" />
        </div>

        <div className="empathy-map-row">
          <div className="middle-card-left">
            <h2>What does he hear?</h2>

            <span>
              <ul>
                <li>News on the internet and television about the growing usage of technology</li>
                <li>Doesn't hear close people talking about digital legacy</li>
                <li>Hears about the theme on searches</li>
                <li>Growing safety concerns about sharing personal and sensitive data remotely</li>
                <li>The fact that a lot of people enjoy his work</li>
              </ul>
            </span>

            <div className="separator bottom-left-separator" />
          </div>

          <div className="empathy-user-icon-wrapper">
            <img className="empathy-user-icon" src={carlosPic} alt="Empathy user" />
          </div>

          <div className="middle-card-right">
            <h2>What does he see?</h2>

            <span>
              <ul>
                <li>Carlos sees his literature works, family memories, digital library and documents as an important part of life</li>
                <li>Sees difficulty in a possible organized manual access of his work and memories by loved ones after his departure</li>
                <li>
                  Also notices that safety of digital data is crucial in a post-mortem access, due data sensibility and his postumous integrity
                </li>
              </ul>
            </span>

            <div className="separator bottom-right-separator" />
          </div>
        </div>

        <div className="empathy-map-bottom-container">
          <div className="empathy-map-say-do">
            <h2>What he says and does?</h2>

            <span>
              Carlos is a very creative writer and well-known for his books and newspaper chronicles, but also for
              being a deep caring dad for his family. Both his two siblings and husband inspire Carlos for his
              everyday writing and they have a lot of beautiful memories together recorded in digital medias.
              He not only writes, but he also reads a lot. Carlos grows a collection of e-books, as he prefers reading
              digitally. Carlos stores his creations and these e-books in a password protected computer and cellphone, which
              he is also very caring about.
            </span>
          </div>

          <div className="empathy-map-bottom-separator-horizontal"></div>

          <div className="empathy-map-bottom-content">
            <div className="empathy-map-bottom-card">
              <h2>Pains</h2>

              <span>
                <ul>
                  <li>Not being sure how to make his ongoing work available for his family and friends after he passes</li>
                  <li>Sensible data safety and integrity</li>
                  <li>"How the system knows when I pass away?"</li>
                </ul>
              </span>
            </div>

            <div className="empathy-map-bottom-separator"></div>

            <div className="empathy-map-bottom-card">
              <h2>Gains</h2>

              <span>
                <ul>
                  <li>To have an easy-to-use and agile system</li>
                  <li>Have a secured digital legacy</li>
                  <li>Plan and organize digital items and heirs</li>
                  <li>Keeping his work and collection alive</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="section-separator" />
    </div>
  );
}
