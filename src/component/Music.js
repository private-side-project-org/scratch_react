import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import darwinAlbum from '../assets/darwin.jpg';
import youtubeIcon from '../assets/youtube.png';
import CONSTANTS from '../utils/constants';

const Music = () => {
  return (
    <div className="page-container music-container">
      <span className="page-title">Music</span>
      <Container className="album-container">
        <Row>
          <Col className="album-block">
            <Image src={darwinAlbum} alt="darwin" />
            <div className="album-text-block">
              <span className="album-title">⍺- Single</span>
              <ul>
                <li>
                  1. Eagle Eye
                  <a target="_blank" href={CONSTANTS.LINKS.EAGLE_EYE}>
                    <Image src={youtubeIcon} />
                  </a>
                </li>
                <li>2. Fire And Ice</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Music;
