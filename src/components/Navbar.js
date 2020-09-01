import React from 'react';
import CONSTANTS from 'utils/constants';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const { NAVITEMS } = CONSTANTS;
  const listItem = () => {
    const history = useHistory();
    const items = NAVITEMS.map((navItem, index) => {
      const handleClick = () => history.push(`/${navItem.toLowerCase()}`);
      return (
        <li
          key={navItem + index}
          className="navbar-items"
          onClick={handleClick}
        >
          {navItem}
        </li>
      );
    });
    return (
      <Row className="navbar-container">
        <Col xs={12} md={8} lg={6} className="navbar-listcontainer">
          {items}
        </Col>
      </Row>
    );
  };
  return listItem();
};

export default Navbar;
