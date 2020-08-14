import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import darwinAlbum from '../assets/darwin.jpg';

const Music = () => {
  return (
    <div className="music-container">
      <span className="page-title">Music</span>
      <Container className="album-container">
        <Row>
          <Col className="album-block">
            <Image src={darwinAlbum} alt="darwin" />
            <div className="album-text-block">
              <span className="album-title">⍺- Single</span>
              <ul>
                <li>1. Eagle Eye</li>
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
