import React from 'react';

import './prototypes.scss';

import prototypeA from "../../assets/prototypes/Frame 0.png";
import prototypeB from "../../assets/prototypes/Frame 1.png";
import prototypeC from "../../assets/prototypes/Frame 2.png";
import prototypeD from "../../assets/prototypes/Frame 3.png";
import prototypeE from "../../assets/prototypes/Frame 4.png";
import prototypeF from "../../assets/prototypes/Frame 5.png";
import prototypeG from "../../assets/prototypes/Frame 6.png";
import prototypeH from "../../assets/prototypes/Frame 7.png";
import prototypeI from "../../assets/prototypes/Frame 8.png";

import Album from '../../components/Album';

export default function Prototypes() {
  return (
    <div className="protypes-container">
      <h1>Here are some already developed screen prototypes</h1>

      <Album
        list={[
          {
            image: <img src={prototypeA} alt="a"/>,
            caption: 'Login'
          },
          {
            image: <img src={prototypeB} alt="b"/>,
            caption: 'Main menu'
          },
          {
            image: <img src={prototypeD} alt="d"/>,
            caption: 'Here is where the owner can upload and manage the medias which will be inherited by the heirs.'
          },
          {
            image: <img src={prototypeE} alt="e"/>,
            caption: 'Credentials management, where are registrated the social network accesses to be inherited'
          },
          {
            image: <img src={prototypeC} alt="c"/>,
            caption: 'Heirs management screen'
          },
          {
            image: <img src={prototypeF} alt="f"/>,
            caption: 'Account management: Each user has their owner account and one heir account for each owner they will inherit'
          },
          {
            image: <img src={prototypeG} alt="g"/>,
            caption: 'Heir invites: Where the user can accept or reject inheritance proposals'
          },
          {
            image: <img src={prototypeH} alt="h"/>,
            caption: 'User profile screen'
          },
          {
            image: <img src={prototypeI} alt="i"/>,
            caption: 'Here is where the heirs can upload the digital death certificate of the owner for validating his pass away'
          },
        ]}
      />
    </div>
  )
}
