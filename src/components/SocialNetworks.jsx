import React from 'react';
import '../styles/components/socialnetworks.sass';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

const socialNetworks = [
  { name: 'linkedin', icon: <FaLinkedinIn /> },
  { name: 'github', icon: <FaGithub /> },
  { name: 'instagram', icon: <FaInstagram /> },
];

const SocialNetworks = () => {
  return (
    <section id="social_networks">
      {socialNetworks.map(({ name, icon }) => (
        <a key={name} href="#" className="social_btn" id={name}>
          {icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
