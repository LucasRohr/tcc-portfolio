import React from "react";

import "./inclusion.scss";

export default function Inclusion() {
  return (
    <div className="inclusion-container">
      <div className="inclusion-title-container">
        <h1>Inclusion Strategy</h1>
        <h2>Is our solution inclusive? What plans do we have?</h2>
      </div>

      <div className="inclusion-circles-container">
        <div className="inclusion-circle">
          <h2>What have we done so far?</h2>

          <p>
            We have designed the whole website, including all user's roadmap. We focused in a clean design, for better
            comprehension. We used the colors blue and white based on the confort of the blue color and the security
            theme. We also have some explanations in the website, in parts were users may have a misunderstood. But we
            have not done a specific design for blind or deaf people, for example.
          </p>
        </div>

        <div className="inclusion-circle">
          <h2>What do we plan to do?</h2>

          <p>
            Our main focus in the appplication is the digital legacy security based on an online procedure. But we can
            also include goals of inclusion, like the possibility to navigate throughout the application using voice
            commands, a feature for blind people.
          </p>
        </div>

        <div className="inclusion-circle">
          <h2>What is our ideal scenario?</h2>

          <p>
            We consider a perfect situation when every person can use our solution to secure their digital legacy
            destination. To ensure that, we would have to make many features in the application, to adress each kind of
            disability, or most of them. For example, voice commands for blind people, touchable control of the
            application for deaf people, signs language navigation for mute people and so on.
          </p>
        </div>

        <div className="inclusion-circle">
          <h2>What tools would we use?</h2>

          <p>
            To acomplish these objectives, we would need to integrate new technological tools in our system. First, we
            would research for study materials about handling disabilities in web applications. After that, we would
            rank the best options and then we would integrate these options in our current application design. To check
            the efficiency of the work, we would test the features with a group of people with disabilities to see if
            the functionalites are indeed what they need.
          </p>
        </div>
      </div>
    </div>
  );
}
