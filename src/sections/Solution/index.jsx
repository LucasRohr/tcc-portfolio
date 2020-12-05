import React from 'react'

import './solution.scss'

import solution from "../../assets/solution.svg";

export default function Solution() {
  return (
    <div className="solution-container">
      <div className="solution-illustration-container">
        <img className="solution-illustration" src={solution} alt="Solution Illustration" />
      </div>

      <div className="solution-explanation">
        <h1>But what have we done so far?</h1>

        <span className="question">How does the system work?</span>
        <span>
          We aim to develop a system that can enable a safe and fully online process of the
          digital legacy. In our solution, an user can act as an owner, who uploads their digital patrimony to be
          storaged in the system for their heirs when the owner passes away.
        </span>

        <span className="question">What makes it secure?</span>
        <span>
          The solution ensures security and integrity of data while handling the legacy, using a system of cryptographic keys
          to safely store all types of information. It is important to say that the system is descentralized, using the Blockchain technology for integrity and
          data immutability. The solution also uses the Smart Contract system inside the Blockchain for the Digital
          Decease Certificate validation without the need of third parties, like lawers.
        </span>

        <span className="question">Who can see the legacy data?</span>
        <span>
          Only users with the right permissions are allowed to see legacy items. This includes the owner and his 
          selected heirs.
        </span>

        <span className="question">Who can be a heir?</span>
        <span>
          Every trusted person can be a heir, from parents to friends.
        </span>

        <span className="question">What happens after the owner passes away?</span>
        <span>
          When they pass away, one of their heirs can use the
          system to upload a Digital Decease Certificate code, so the system can validate it using a public and secure
          platform (Registro Civil). If the digital document is in fact official and the owner is deceased, the heirs
          can access their digital legacy.
        </span>
      </div>
    </div>
  )
}
