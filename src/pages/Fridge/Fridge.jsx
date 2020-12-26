import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FridgeItem from '../../components/FridgeItem/FridgeItem';
import * as fridgeItemAPI from '../../services/fridgeItemService';
import {
  Button,
  TextField,
} from '@material-ui/core';

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
        <h1>Fridge</h1>
        <form onSubmit={this.handleAddFoodItem}>
          <TextField
            id="search"
            label="Add food to fridge"
            variant="standard"
            // variant="filled"
            onChange={this.handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Add Food
          </Button>
        </form>
        {currentFridge.map((item, index) => (
          <FridgeItem
            key={index}
            item={item}
            handleRemoveFoodItem={this.handleRemoveFoodItem}
          />
        ))}
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
          >
            Search Recipes
          </Button>
        </Link>
      </>
    );
  }
}

export default Fridge;
