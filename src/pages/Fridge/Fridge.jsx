import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FridgeItem from '../../components/FridgeItem/FridgeItem';
import {
  Button,
  TextField,
  Typography,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
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
    mealType: 'sandwich',
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

  handleChangeMealType = (e) => {
    let mealType = this.state.mealType;
    mealType = e.target.value;
    this.setState({ mealType });
  };

  updateGeneralSearchTerms = (fridgeItems) => {
    const fridge = fridgeItems;
    const generalSearchTerms = [];
    fridge.forEach((item, index) => {
      generalSearchTerms.push(item.name);
    });
    this.setState({ generalSearchTerms });
  };

  async componentDidMount() {
    const currentFridge = await fridgeItemAPI.getCurrentFridgeItems();
    this.setState({ currentFridge });
    this.updateGeneralSearchTerms(this.state.currentFridge);
  }

  render() {
    const { currentFridge } = this.state;

    return (
      <>
        <Typography variant="h3" component="h1" align="center">
          Fridge
        </Typography>
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
              label="Add an item to your fridge."
              variant="standard"
              onChange={this.handleChange}
              style={{ marginRight: '10px' }}
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              size="medium"
              type="submit"
            >
              Add
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            // textAlign: 'center',
            alignItems: 'center',
          }}
        >
          {/* <FormControl className={classes.formControl}> */}
          <FormControl>
            <InputLabel id="select-meal-type">Select Meal Type</InputLabel>
            <Select
              labelId="mealType"
              id="mealType"
              value={this.state.mealType}
              onChange={this.handleChangeMealType}
              style={{ minWidth: 200 }}
            >
              <MenuItem value="sandwich">Sandwich</MenuItem>
              <MenuItem value="soup">Soup</MenuItem>
              <MenuItem value="stew">Stew</MenuItem>
              <MenuItem value="baked">Baked</MenuItem>
            </Select>
          </FormControl>
          <Link
            to={{
              pathname: '/results',
              state: {
                generalSearchTerms: this.state.generalSearchTerms,
                mealType: this.state.mealType,
                user: this.props.user,
              },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={currentFridge.length > 0 ? '' : true}
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
