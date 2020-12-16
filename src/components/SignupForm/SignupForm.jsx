import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';
import {
  Container,
  Input,
  InputGroup,
  Label,
  Button,
  Form,
} from '../styled_components';

class SignupForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push('/');
    } catch (err) {
      updateMessage(err.message);
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
      <>
        <Container>
          <h3>Sign Up</h3>
          <Form autoComplete="off" onSubmit={this.handleSubmit}>
            <InputGroup>
              <Label htmlFor="name">Name:</Label>
              <Input
                type="text"
                autoComplete="off"
                id="name"
                value={name}
                name="name"
                onChange={this.handleChange}
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="email">Email:</Label>
              <Input
                type="text"
                autoComplete="off"
                id="email"
                value={email}
                name="email"
                onChange={this.handleChange}
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="password">Password:</Label>
              <Input
                type="password"
                autoComplete="off"
                id="password"
                value={password}
                name="password"
                onChange={this.handleChange}
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="confirm">Confirm Password:</Label>
              <Input
                type="password"
                autoComplete="off"
                id="confirm"
                value={passwordConf}
                name="passwordConf"
                onChange={this.handleChange}
              />
            </InputGroup>
            <Button disabled={this.isFormInvalid()}>Sign Up /n</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/">Cancel</Link>
          </Form>
        </Container>
      </>
    );
  }
}

export default SignupForm;
