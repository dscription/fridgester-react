import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from "../Users/Users";
import Favorites from "../Favorites/Favorites"
import ShoppingList from "../ShoppingList/ShoppingList"
import Fridge from "../Fridge/Fridge"
import Landing from "../Landing/Landing"
import "./App.css";

class App extends Component {
  state = {
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  render() {
    const { user } = this.state;
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <div id="container-main">
          <Route
            exact
            path="/"
            render={() => (user ? <Fridge user={user}/> : <Landing />)}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <Signup
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <Login
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/users"
            render={() => (user ? <Users /> : <Redirect to="/login" />)}
          />
          {/* Route to Recipe */}
          <Route
            exact
            path="/favorites"
            render={() => <Favorites />}
          />
          {/* Route to Shopping List */}
          <Route
            exact
            path="/shopping-list"
            render={() => <ShoppingList />}
          />
        </div>
      </>
    );
  }
}

export default App;
