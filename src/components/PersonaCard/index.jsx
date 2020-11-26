import React from "react";

import "./persona-card.scss"

export default function PersonaCard({
  name = 'Sample Text',
  values = [],
  avatar,
  age = 19,
  work = 'Sample Text',
  family = 'Sample Text',
  location = 'Sample Text',
  character = 'Sample Text',
  bio = 'Sample Text',
  goals = [],
  frustrations = [],
}) {
  return (
    <div className="persona-card">
      <div className="persona-card-header">
        <span>{name}</span>
        <div className="persona-card-header-values">
          {values.map(value => (
            <div className="value">{value}</div>
          ))}
        </div>
      </div>
      <div className="persona-card-body">
        <div className="persona-card-body-info">
          <img src={avatar} alt="carlos himself" />
          <div className="persona-card-body-info-data">
            <span>Age</span>{age}
          </div>
          <div className="persona-card-body-info-data">
            <span>Work</span>{work}
          </div>
          <div className="persona-card-body-info-data">
            <span>Family</span>{family}
          </div>
          <div className="persona-card-body-info-data">
            <span>Location</span>{location}
          </div>
          <div className="persona-card-body-info-data">
            <span>Character</span>{character}
          </div>
        </div>
        <div className="persona-card-body-info">
          <div className="persona-card-body-info-data">
            <span>Biography</span>
            <p>
              {bio}
            </p>
          </div>
          <div className="persona-card-body-info-data">
            <span>Goals</span>
            <ul>
              {goals.map(goal => (
                <li>{goal}</li>
              ))}
            </ul>
          </div>
          <div className="persona-card-body-info-data">
            <span>Frustrations</span>
            <ul>
              {frustrations.map(frustration => (
                <li>{frustration}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
