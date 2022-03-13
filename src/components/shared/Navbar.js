import React, { useRef } from 'react';
import CONSTANTS from 'utils/constants';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import anime from 'animejs';

const Navbar = () => {
  const { NAVITEMS } = CONSTANTS;
  const ref = useRef();

  const listItem = () => {
    const history = useHistory();
    const moveDown = () => {
      return anime({
        translateY: 70,
        targets: '.navbar-items',
        easing: 'easeOutExpo',
      });
    };
    const moveUp = () => {
      return anime({
        translateY: 0,
        targets: '.navbar-items',
        easing: 'easeOutExpo',
      });
    };

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
      <Row
        className="navbar-container"
        onMouseEnter={moveDown}
        onMouseLeave={moveUp}
      >
        <Col ref={ref} xs={12} md={8} lg={6} className="navbar-listcontainer">
          {items}
        </Col>
      </Row>
    );
  };
  return listItem();
};

export default Navbar;
