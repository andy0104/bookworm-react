import React from 'react';
import {Link} from 'react-router-dom';

import {Row, Col} from 'react-bootstrap';

const HomePage = () => {
  return (
    <Row>
      <Col md={8}>
        <h1>Home Page</h1>
        <Link to="/login">Login Page</Link>
      </Col>
      <Col md={4}>
        Col-md-4
      </Col>
    </Row>
  );
};

export default HomePage;