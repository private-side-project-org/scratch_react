import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import IconGroup from './IconGroup';

const Profile = () => {
  return (
    <div className="page-container profile-container">
      <span className="page-title">Profile</span>
      <div className="profile-detail-container">
        <Row className="profile-row-block">
          <Col md={2}></Col>
          <Col md={3}>
            <span className="profile-text">Name</span>
          </Col>
          <Col md={5}>
            <span>Go Nakano</span>
          </Col>
        </Row>
        <Row className="profile-row-block">
          <Col md={2}></Col>
          <Col md={3}>
            <span className="profile-text">Job</span>
          </Col>
          <Col md={5}>
            <span>Software Engineer</span>
          </Col>
        </Row>
        <Row className="profile-row-block">
          <Col md={2}></Col>
          <Col md={3}>
            <span className="profile-text">Email</span>
          </Col>
          <Col md={5}>
            <span>g.nakano555@gmail.com</span>
          </Col>
        </Row>
        <Row className="profile-icon-block">
          <Col md={2}></Col>
          <Col sm={7} md={5}>
            <IconGroup />
          </Col>
          <Col md={3}></Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
