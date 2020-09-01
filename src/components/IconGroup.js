import React from 'react';
import { Image } from 'react-bootstrap';
import instagramIcon from 'assets/instagram.png';
import twitterIcon from 'assets/twitter.png';
import facebookIcon from 'assets/facebook.png';
import CONSTANTS from 'utils/constants';

const IconGroup = () => {
  const { ICON_LIST } = CONSTANTS;
  const iconList = ICON_LIST.map((icon) => {
    let iconSrc;
    let iconClass;
    switch (icon.key) {
      case 'facebook':
        iconSrc = facebookIcon;
        iconClass = 'icon-block background';
        break;
      case 'twitter':
        iconSrc = twitterIcon;
        iconClass = 'icon-block';
        break;
      case 'instagram':
        iconSrc = instagramIcon;
        iconClass = 'icon-block background';
        break;
    }
    return (
      <a target="_blank" key={icon.alt} href={icon.href}>
        <Image
          className={`icon-block ${iconClass}`}
          src={iconSrc}
          alt={icon.alt}
        />
      </a>
    );
  });
  return <div className="icon-container">{iconList}</div>;
};

export default IconGroup;
