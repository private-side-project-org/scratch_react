import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
import twitterIcon from '../assets/twitter.png';

const Profile = () => {
  return (
    <div className="page-container profile-container">
      <span>Profile</span>
      <Row>
        <Col>
          <ul>
            <li>Name</li>
            <li>Job</li>
            <li>Email</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>Go Nakano</li>
            <li>Software Engineer</li>
            <li>g.nakano555@gmail.com</li>
          </ul>
        </Col>
      </Row>
      <div>
        <Image src={facebookIcon} alt="facebookIcon" />
        <Image src={instagramIcon} alt="instagramIcon" />
        <Image src={twitterIcon} alt="twitterIcon" />
      </div>
    </div>
  );
};

export default Profile;
