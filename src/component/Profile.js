import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import IconGroup from './IconGroup';
import CONSTANTS from '../utils/constants';

const Profile = () => {
  const { PROFILE_TITLE, PROFILE_VALUE } = CONSTANTS;
  const [address, setAddress] = useState('');

  const handleChange = (e) => {
    if (e.target.value.length >= 7) {
      fetch(
        `https://zipcloud.ibsnet.co.jp/api/search?${e.target.value}`
      ).then((res) => console.log(res));
    }
  };

  return (
    <div className="page-container profile-container">
      <span className="page-title">Profile</span>
      <div className="profile-detail-container">
        <Row className="profile-row-block">
          <Col md={3}>
            <span className="profile-text">{PROFILE_TITLE.NAME}</span>
          </Col>
          <Col md={5}>
            <span>{PROFILE_VALUE.NAME}</span>
          </Col>
        </Row>
        <Row className="profile-row-block">
          <Col md={3}>
            <span className="profile-text">{PROFILE_TITLE.JOB}</span>
          </Col>
          <Col md={5}>
            <span>{PROFILE_VALUE.JOB}</span>
          </Col>
        </Row>
        <Row className="profile-row-block">
          <Col md={3}>
            <span className="profile-text">{PROFILE_TITLE.EMAIL}</span>
          </Col>
          <Col md={5}>
            <span>{PROFILE_VALUE.EMAIL}</span>
          </Col>
        </Row>
        <Row className="profile-icon-block">
          <Col sm={7} md={3}>
            <IconGroup />
          </Col>
          <Col md={5}></Col>
        </Row>
      </div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Profile;
