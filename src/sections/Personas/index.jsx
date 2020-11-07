import React from 'react'

import './personas.scss'

export default function Personas() {
  return (
    <div className="personas-container">
      <div className="persona-card">
        <div className="persona-card-header">
          <span>Carlos Vasconcellos</span>
          <div className="persona-card-header-values">
            <div className="value">Creative</div>
            <div className="value">Caring</div>
          </div>
        </div>
        <div className="persona-card-body">
          <div className="persona-card-body-info">
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
              <p></p>
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
  )
}