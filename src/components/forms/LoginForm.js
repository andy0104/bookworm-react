import React from 'react';
import {Form, Button} from 'react-bootstrap';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class LoginForm extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };

  onChange = (event) => {    
    let data = this.state.data;
    this.setState({
      data: {...data, [event.target.name]: event.target.value}
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    let stateErrors = this.state.errors;
    const errors = this.validate(this.state.data);
    stateErrors = errors;

    this.setState({ 
      errors: stateErrors
    });

    if (Object.keys(errors).length === 0) {
      this.props.onLoginSubmit(this.state.data);
    }
  };

  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) {
      errors.email = 'Enter a valid email id';
    }
    if (!data.password) {
      errors.password = 'Password can not be blank!';
    }    
    return errors;
  };

  render() {
    const {data, errors} = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group >
          <Form.Label>Email ID:</Form.Label>
          <Form.Control type="text" placeholder="Enter your email id" name="email" value={data.email} onChange={this.onChange} />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Group>
        <Form.Group >
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Enter your email id" name="password" value={data.password} onChange={this.onChange} />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Group>
        <Button variant="success" type="submit" block>Login</Button>
      </Form>
    );
  }  
};

export default LoginForm;