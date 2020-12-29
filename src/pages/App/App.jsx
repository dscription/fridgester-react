import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import authService from '../../services/authService';
import Users from '../Users/Users';
import ShoppingList from '../ShoppingList/ShoppingList';
import Fridge from '../Fridge/Fridge';
import Landing from '../Landing/Landing';
import Results from '../Results/Results';
import './App.css';
import * as recipeAPI from '../../services/recipeService';
import {Container} from '@material-ui/core'


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
        <Container maxWidth="sm" style={{margin: '20px auto'}} >
          <Route
            exact
            path="/"
            render={() =>
              user ? (
                <Fridge user={user} handleApiCall={this.handleApiCall} />
              ) : (
                <Landing />
              )
            }
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
          {/* <Route exact path="/favorites" render={() => <Favorites />} /> */}
          {/* Route to Shopping List */}
          <Route
            exact
            path="/shopping-list"
            render={({history, location }) => <ShoppingList location={location} history={history} />}
          />
          <Route
            exact
            path="/results"
            render={({ history, location }) => (
              <Results
                history={history}
                location={location}
              />
            )}
          />
        </Container>
      </>
    );
  }
}

export default App;
