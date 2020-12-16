import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';
import {
  Input,
  InputGroup,
  Label,
  Button,
  Main,
  Form
} from '../../components/styled_components';

class LoginPage extends Component {
  state = {
    email: '',
    pw: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  };

  render() {
    const { email, pw } = this.state;
    return (
      <Main>
        <h3>Log In</h3>
        <Form autoComplete="off" onSubmit={this.handleSubmit}>
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
              value={pw}
              name="pw"
              onChange={this.handleChange}
            />
          </InputGroup>
          <Button className="btn green">Log In</Button>&nbsp;&nbsp;&nbsp;
          <Link className="btn red" to="/">
            Cancel
          </Link>
        </Form>
      </Main>
    );
  }
}

export default LoginPage;
