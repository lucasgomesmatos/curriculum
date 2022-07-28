import React from 'react';
import SocialNetworks from './SocialNetworks';
import Avatar from '../img/eu.jpeg';
import '../styles/components/sidebar.sass';
import InformationContainer from './informationContainer';

const Slidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Lucas Gomes Matos" />
      <p className="title">Desenvolvedor Full Stack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download Currículo
      </a>
    </aside>
  );
};

export default Slidebar;
