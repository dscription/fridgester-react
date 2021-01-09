import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';

class Signup extends Component {
  state = {
    message: '',
  };

  updateMessage = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '90vh',
        }}
      >
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </main>
    );
  }
}

export default Signup;
