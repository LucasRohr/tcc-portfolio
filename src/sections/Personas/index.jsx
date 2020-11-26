import React from "react";
import "./personas.scss";
import PersonaCard from "../../components/PersonaCard"
import carlosPic from "../../assets/coolguy1.jpg";
export default function Personas() {
  return (
    <div className="personas-container">
      <h1 className="personas-title">How our user can look like?</h1>
      <PersonaCard 
        name="Carlos Vasconcellos"
        values={['Creative', 'Caring', 'Inspiring']}
        avatar={carlosPic}
        age={29}
        work="Writer"
        family="Two siblings and husband"
        location="Porto Alegre, Brazil"
        character="Legacy-leaning artist and dad"
        bio="Carlos is a notorious writer in the region. Not only for the
        chronicles he writes for one of the most popular newspapers of the
        city, but also for his books and blog posts about his life in the
        internet. He is married to his husband Ronaldo and, together, they
        adopted two children, which makes them a very nice family and
        inspiration for his work. However, Carlos is often reading e-books
        from his digital library or writing new and authoral ones which
        nobody knows about until it is released. Aware of the uncertanties
        of tomorrow, Carlos looks for a way to keep his unfinished works,
        e-book collection and family memories available to his family and
        friends even after he passes away."
        goals={[
          'Follow on building his writing career',
          'Make his work and unfinished ones available when he passes away',
          'Keep his family memories alive forever',
        ]}
        frustrations={[
          'Not being sure how to make his memories and work live past him',
          'Unsafety about current solutions',
        ]}
      />
    </div>
  );
}
