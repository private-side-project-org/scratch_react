import React from 'react';
import CONSTANTS from '../utils/constants';
import { Row, Col } from 'react-bootstrap';

const Navbar = () => {
  const { NAVITEMS } = CONSTANTS;
  const listItem = () => {
    const items = NAVITEMS.map((navItem, key) => (
      <li className="navbar-items">{navItem}</li>
    ));
    return (
      <Row className="navbar-container">
        <Col xs={12} sm={8} md={8} lg={6} className="navbar-listcontainer">
          {items}
        </Col>
      </Row>
    );
  };

  return listItem();
};

export default Navbar;
