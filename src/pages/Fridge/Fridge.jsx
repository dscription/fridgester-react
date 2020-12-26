import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FridgeItem from '../../components/FridgeItem/FridgeItem';
import {
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
  Typography
} from '@material-ui/core';
import * as fridgeItemAPI from '../../services/fridgeItemService';

class Fridge extends Component {
  state = {
    value: '',
    formData: {
      name: '',
    },
    currentFridge: [],
    generalSearchTerms: [],
  };

  handleAddFoodItem = async (e) => {
    e.preventDefault();
    const { formData } = this.state;
    const newFridgeItem = await fridgeItemAPI.createFridgeItem([formData]);
    const currentFridge = this.state.currentFridge;
    currentFridge.push(newFridgeItem[0]);
    this.setState({ currentFridge });
    this.updateGeneralSearchTerms(this.state.currentFridge);
  };

  handleRemoveFoodItem = async (fridgeItemId) => {
    const deletedfridgeItem = await fridgeItemAPI.deleteFridgeItem(
      fridgeItemId
    );
    const currentFridge = this.state.currentFridge;
    currentFridge.forEach((fridgeItem, index) => {
      if (fridgeItem._id === deletedfridgeItem._id) {
        delete currentFridge[index];
      }
    });
    this.setState({ currentFridge });
    this.updateGeneralSearchTerms(this.state.currentFridge);
  };

  handleChange = async (e) => {
    const formData = {
      ...this.state.formData,
    };
    formData.name = await e.target.value;
    this.setState({ formData });
  };

  updateGeneralSearchTerms = (fridgeItems) => {
    const fridge = fridgeItems;
    const generalSearchTerms = [];
    fridge.forEach((item, index) => {
      generalSearchTerms.push(item.name);
    });
    this.setState({ generalSearchTerms });
  };

  handleApiCall = () => {
    this.props.handleApiCall(this.state.generalSearchTerms);
  };

  async componentDidMount() {
    const currentFridge = await fridgeItemAPI.getCurrentFridgeItems();
    this.setState({ currentFridge });
    this.updateGeneralSearchTerms(this.state.currentFridge);
  }

  // TODO: If current fridge is empty render some sort of useful message to the screen for the user.

  render() {
    const { currentFridge } = this.state;

    return (
      <>
        <Typography variant="h3" component="h1" align="center">Fridge</Typography>
        <form onSubmit={this.handleAddFoodItem}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '10px 0',
            }}
          >
            <TextField
              id="search"
              label="Add food to fridge"
              variant="standard"
              onChange={this.handleChange}
              style={{marginRight: '10px'}}
              fullWidth
            />
            <Button variant="contained" color="primary" size="large" type="submit">
              Add Food
            </Button>
          </div>
        </form>
        {currentFridge.map((item, index) => (
          <FridgeItem
            key={index}
            item={item}
            handleRemoveFoodItem={this.handleRemoveFoodItem}
          />
        ))}
        <div style={{textAlign:'center'}}>
          <Link
            to={{
              pathname: '/results',
              state: {
                generalSearchTerms: this.state.generalSearchTerms,
                user: this.props.user,
              },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={currentFridge.length > 0 ? '' : true}
              onClick={this.handleApiCall}
              size="large"
            >
              Search Recipes
            </Button>
          </Link>
        </div>
      </>
    );
  }
}

export default Fridge;
