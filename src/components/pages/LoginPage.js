import React from 'react';
import {Link} from 'react-router-dom';

import {Row, Col} from 'react-bootstrap';
import LoginForm from '../forms/LoginForm';

const LoginPage = () => {
  const onLoginSubmit = (formData) => {
    console.log(`Form Submitted ${formData}`);
  };

  return (
    <React.Fragment>
      <Row>
        <Col md={8}>
          <h1>Login Page</h1>          
        </Col>
        <Col md={4}>          
          <Link to="/">Home Page</Link>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <LoginForm onLoginSubmit={onLoginSubmit} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default LoginPage;