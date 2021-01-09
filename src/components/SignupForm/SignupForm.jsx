import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';

import {
  Button,
  TextField,
  Typography,
  InputLabel,
  Card,
  CardContent,
} from '@material-ui/core';

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
      <Card style={{ width: '300px', margin: '0px auto' }}>
        <CardContent>
          <Typography variant="h2" component="h1">
            Sign Up
          </Typography>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div>
              <TextField
                type="text"
                autoComplete="off"
                id="name"
                value={name}
                name="name"
                onChange={this.handleChange}
                variant="outlined"
                fullWidth
              />
              <InputLabel htmlFor="name">Name:</InputLabel>
            </div>
            <div>
              <TextField
                type="text"
                autoComplete="off"
                id="email"
                value={email}
                name="email"
                onChange={this.handleChange}
                variant="outlined"
                fullWidth
              />
              <InputLabel htmlFor="email">Email:</InputLabel>
            </div>
            <div>
              <TextField
                type="password"
                autoComplete="off"
                id="password"
                value={password}
                name="password"
                onChange={this.handleChange}
                variant="outlined"
                fullWidth
              />
              <InputLabel htmlFor="password">Password:</InputLabel>
            </div>
            <div>
              <TextField
                type="password"
                autoComplete="off"
                id="confirm"
                value={passwordConf}
                name="passwordConf"
                onChange={this.handleChange}
                variant="outlined"
                fullWidth
              />
              <InputLabel htmlFor="confirm">Confirm Password:</InputLabel>
            </div>
            <Button
              disabled={this.isFormInvalid()}
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/">
              <Button variant="contained" color="secondary">
                Cancel
              </Button>
            </Link>
          </form>
        </CardContent>
      </Card>
    );
  }
}

export default SignupForm;
