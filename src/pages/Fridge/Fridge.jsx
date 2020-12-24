import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import FridgeItem from '../../components/FridgeItem/FridgeItem';
import * as fridgeItemAPI from '../../services/fridgeItemService';
import {Button} from '@material-ui/core'

class Fridge extends Component {
  state = {
    value: '',
    formData: {
      name: '',
      expiration: '',
      isPerishable: null,
      isExpired: null,
      image: '',
      dateAdded: '',
      dateRemoved: '',
    },
    currentFridge: [],
    generalSearchTerms: [],
  };

  handleAddFoodItem = async (e) => {
    e.preventDefault();
    const { formData } = this.state;
    const newFridgeItem = await fridgeItemAPI.createFridgeItem(formData);
    const currentFridge = this.state.currentFridge;
    currentFridge.push(newFridgeItem);
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
        <Form onSubmit={this.handleAddFoodItem}>
          <FormGroup>
            <InputGroup>
              <Input
                id="search"
                name="name"
                onChange={this.handleChange}
                placeholder="Add Food Item"
              />
              <InputGroupAddon addonType="append">
                <Button variant="contained" color="primary" type="submit">Add Food</Button>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </Form>
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
          <Button variant="contained" color="primary" onClick={this.handleApiCall}>
            Search Recipes
          </Button>
        </Link>
      </>
    );
  }
}

export default Fridge;
