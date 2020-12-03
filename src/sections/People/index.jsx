import React from 'react';

import './people.scss';

export default function People() {
  return (
    <div className="people-container">
      <h1>So, who are the people that face this problem?</h1>
      <h2>Is this challenge really a thing?</h2>

      <div className="people-cards-container">
        <div className="people-card">
          Apart from being a matter that most people haven't ever thought about, the digital legacy issue may
          affect all of us. This can be sure as we all are technology users, we can observe this in eachother
          everyday, in our routines
        </div>

        <div className="people-card">
          So our problem is all around us, and can impact everyone who has precious and
          important data on their devices and online storages (as most of us can relate to)
        </div>
      </div>

      <h2 style={{marginBottom: 50}}>What are the design challenges?</h2>
      <div className="people-cards-container">
        <div className="people-card" style={{textAlign: 'justify', flex: .7}}>
          We should immediatly design a way to help, but we have to design it clearly and most importantly: with
          security and integrity. That is a truth, because none of us want a system with security issues to handle
          data that describes who we were in life, such sensible content
        </div>
      </div>
    </div>
  )
}
