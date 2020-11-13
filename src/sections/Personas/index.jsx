import React from "react";

import carlosPic from "../../assets/coolguy1.jpg";
import "./personas.scss";

export default function Personas() {
  return (
    <div className="personas-container">
      <h1 className="personas-title">How our user can look like?</h1>
      <div className="persona-card">
        <div className="persona-card-header">
          <span>Carlos Vasconcellos</span>
          <div className="persona-card-header-values">
            <div className="value">Creative</div>
            <div className="value">Caring</div>
            <div className="value">Inspiring</div>
          </div>
        </div>
        <div className="persona-card-body">
          <div className="persona-card-body-info">
            <img src={carlosPic} alt="carlos himself" />
            <div className="persona-card-body-info-data">
              <span>Age</span>29
            </div>
            <div className="persona-card-body-info-data">
              <span>Work</span>Writer
            </div>
            <div className="persona-card-body-info-data">
              <span>Family</span>Two siblings and husband
            </div>
            <div className="persona-card-body-info-data">
              <span>Location</span>Porto Alegre, Brazil
            </div>
            <div className="persona-card-body-info-data">
              <span>Character</span>Legacy-leaning artist and dad
            </div>
          </div>
          <div className="persona-card-body-info">
            <div className="persona-card-body-info-data">
              <span>Biography</span>
              <p>
                Carlos is a notorious writer in the region. Not only for the chronicles he writes for one of the most
                popular newspapers of the city, but also for his books and blog posts about his life in the internet. He
                is married to his husband Ronaldo and, together, they adopted two children, which makes them a very nice
                family and inspiration for his work. However, Carlos is often reading e-books from his digital library or 
                writing new and authoral ones which nobody knows about until it is released. Aware of the uncertanties of
                tomorrow, Carlos looks for a way to keep his unfinished works, e-book collection and family memories available
                to his family and friends even after he passes away.
              </p>
            </div>
            <div className="persona-card-body-info-data">
              <span>Goals</span>
              <ul>
                <li>Follow on building his writing career</li>
                <li>Make his work and unfinished ones available when he passes away</li>
                <li>Keep his family memories alive forever</li>
              </ul>
            </div>
            <div className="persona-card-body-info-data">
              <span>Frustrations</span>
              <ul>
                <li>Not being sure how to make his memories and work live past him</li>
                <li>Unsafety about current solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
