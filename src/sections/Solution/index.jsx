import React from 'react'

import solution from "../../assets/solution.svg";

export default function Solution() {
  return (
    <div className="solution-container">
      <div className="solution-illustration-container">
        <img className="solution-illustration" src={solution} alt="Solution Illustration" />
      </div>

      <div className="solution-explanation">
        <h1>But what have we done so far?</h1>

        <span>
          We defined our goal to be the development of a system that can enable the totally online process of the
          digital heritage. In out solution, a user can act as an owner, who uploads his/her digital patrimony to be
          storaged in the system.
        </span>

        <span>
          The solution ensures security and integrity of data while handling the heritage, using a criptographic keys
          system to store all types of information in a encrypted way. That been said, only users with the right
          permissions are allowed to see heritage items. This includes the owner and the selected heirs that the owner
          can choose.
        </span>

        <span>
          This selection if free, from parents to friends. When an owner passes away, one of his/her heirs can use the
          system to upload a Digital Decease Certificate code, so the system can validate it using a public and secure
          platform (Registro Civil). If the digital document is in fact official and the owner is deceased, the heirs
          can access their digital heritage.
        </span>

        <span>
          It is important to say that the system is descentralized, using the Blockchain technology for integrity and
          data immutability. The solution also uses the Smart Contract system inside a Blockchain, for the Digital
          Decease Certificate validation without the need of third parties, like lawers.
        </span>
      </div>
    </div>
  )
}
