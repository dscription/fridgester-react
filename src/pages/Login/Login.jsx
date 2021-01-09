import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';
import {
  Button,
  TextField,
  Typography,
  Input,
  InputLabel,
  Card,
  CardContent,
  FormControl,
} from '@material-ui/core';

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
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '90vh',
        }}
      >
        <Card style={{ width: '300px', margin: '0px auto' }}>
          <CardContent style={{ width: '100%' }}>
            <Typography variant="h2" component="h1">
              Log In
            </Typography>

            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <div>
                <TextField
                  type="text"
                  variant="outlined"
                  autoComplete="off"
                  id="email"
                  value={email}
                  name="email"
                  onChange={this.handleChange}
                  fullWidth
                />
                <InputLabel htmlFor="email">Email:</InputLabel>
              </div>
              <div>
                <TextField
                  type="password"
                  variant="outlined"
                  autoComplete="off"
                  id="password"
                  value={pw}
                  name="pw"
                  onChange={this.handleChange}
                  fullWidth
                />
                <InputLabel htmlFor="password">Password:</InputLabel>
              </div>
              <Button type="submit" variant="contained" color="primary">
                Log In
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Link to="/">
                <Button variant="contained" color="secondary">
                  Cancel
                </Button>
              </Link>
            </form>
          </CardContent>
        </Card>
      </main>
    );
  }
}

export default LoginPage;
