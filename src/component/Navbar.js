import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Navbar = () => {
  return (
    <Row className="navbar-container">
      <Col className="navbar-items" xs={12} sm={10} lg={6}>
        <Col>HOME</Col>
        <Col>Profile</Col>
        <Col>Music</Col>
        <Col>Photos</Col>
        <Col>Blog</Col>
      </Col>
    </Row>
  );
};

export default Navbar;
