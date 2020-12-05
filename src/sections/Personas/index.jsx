import React from "react";
import "./personas.scss";
import PersonaCard from "../../components/PersonaCard";
import carlosPic from "../../assets/coolguy1.jpg";
import mediumLogo from "../../assets/logo_medium.png";
import amazonLogo from "../../assets/logo_amazon.png";
import zhLogo from "../../assets/logo_zh.png";
import twitterLogo from "../../assets/logo_twitter.png";
export default function Personas() {
  return (
    <div className="personas-container">
      <h1 className="personas-title">How our user can look like?</h1>
      <PersonaCard
        name="Carlos Vasconcellos"
        values={["Creative", "Caring", "Inspiring"]}
        avatar={carlosPic}
        age={29}
        work="Writer"
        family="Two siblings and husband"
        location="Porto Alegre, Brazil"
        character="Legacy-leaning artist and dad"
        bio={`Carlos is a notorious writer in the region. Not only for the
        chronicles he writes for one of the most popular newspapers of the
        city, but also for his books and blog posts about his life in the
        internet. He is married to his husband Ronaldo and, together, they
        adopted two children, which makes them a very nice family and
        inspiration for his work. He uses both his and the news' computer for 
        his daily writing, being that on his work or personal projects, and a reading 
        tablet to read his digital library of e-books. Despite not being a "tech-guy",
        Carlos has a level of concern about his digital integrity adobe-average
        in order to care for his data and the intelectual property surrounding
        his work. Speaking on which, Carlos works everyday but the weekends,
        spending eight hours a day on each. He not rarely works from home due the
        fact he has children. As Carlos is often reading e-books
        from his digital library or writing new and authoral ones which
        nobody knows about until it is released. Aware of the uncertanties
        of tomorrow, Carlos looks for a way to keep his unfinished works,
        e-book collection and family memories available to his family and
        friends even after he passes away.`}
        goals={[
          "Follow on building his writing career",
          "Make his work and unfinished ones available when he passes away",
          "Keep his family memories alive forever",
        ]}
        frustrations={[
          "Not being sure how to make his memories and work live past him",
          "Inability for a ",
          "Unsafety about current solutions",
        ]}
        personality={[
          { typeA: "Introversion", typeB: "Extroversion", range: 55 },
          { typeA: "Intuition", typeB: "Sensing", range: 20 },
          { typeA: "Thinking", typeB: "Feeling", range: 68 },
          { typeA: "Judging", typeB: "Percieving", range: 40 },
        ]}
        brands={[amazonLogo, twitterLogo, zhLogo, mediumLogo]}
        quote=""
      />
    </div>
  );
}
