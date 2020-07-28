import React from 'react';
import { Image } from 'react-bootstrap';
import instagramIcon from '../assets/instagram.png';
import twitterIcon from '../assets/twitter.png';
import facebookIcon from '../assets/facebook.png';

const IconGroup = () => {
  return (
    <div className="icon-container">
      <a target="_blank" href="https://www.instagram.com/n_g55555/">
        <Image
          className="icon-block background"
          src={instagramIcon}
          alt="instagramIcon"
        />
      </a>
      <a target="_blank" href="https://twitter.com/Nakano555G">
        <Image className="icon-block" src={twitterIcon} alt="twitterIcon" />
      </a>
      <a target="_blank" href="https://www.facebook.com/go.nakano.16/">
        <Image
          className="icon-block background"
          src={facebookIcon}
          alt="facebookIcon"
        />
      </a>
    </div>
  );
};

export default IconGroup;
