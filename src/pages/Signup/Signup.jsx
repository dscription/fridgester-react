import React, { Component } from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import {Main} from '../../components/styled_components'


class Signup extends Component {
  state = {
    message: "",
  };

  updateMessage = (msg) => {
    this.setState({ message: msg });
  };

  render() {
    return (
      <Main>
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </Main>
    );
  }
}

export default Signup;
