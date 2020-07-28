import React from 'react';
import { Image } from 'react-bootstrap';
import instagramIcon from '../assets/instagram.png';
import twitterIcon from '../assets/twitter.png';
import facebookIcon from '../assets/facebook.png';

const IconGroup = () => {
  return (
    <div className="icon-container">
      <Image className="icon-block" src={instagramIcon} alt="instagramIcon" />
      <Image className="icon-block" src={twitterIcon} alt="twitterIcon" />
      <Image className="icon-block" src={facebookIcon} alt="facebookIcon" />
    </div>
  );
};

export default IconGroup;
