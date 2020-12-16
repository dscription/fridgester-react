import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import authService from '../../services/authService';
import Container from '../../styledComponents/Container';

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

          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                autoComplete="off"
                id="name"
                value={name}
                name="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                autoComplete="off"
                id="email"
                value={email}
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                autoComplete="off"
                id="password"
                value={password}
                name="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm">Confirm Password:</label>
              <input
                type="password"
                autoComplete="off"
                id="confirm"
                value={passwordConf}
                name="passwordConf"
                onChange={this.handleChange}
              />
            </div>
            <button disabled={this.isFormInvalid()}>Sign Up /n</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/">Cancel</Link>
          </form>
        </Container>
      </>
    );
  }
}

export default SignupForm;
