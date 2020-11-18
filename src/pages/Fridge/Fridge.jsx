import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import FridgeItem from '../../components/FridgeItem/FridgeItem';
import Container from '../../styledComponents/Container';
import * as fridgeItemAPI from '../../services/fridgeItemService';

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
      if (fridgeItem._id == deletedfridgeItem._id) {
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
    this.props.handleApiCall(this.state.generalSearchTerms)
  }


  async componentDidMount() {
    const currentFridge = await fridgeItemAPI.getCurrentFridgeItems();
    const favoriteUrls = await 
    this.setState({ currentFridge });
    this.updateGeneralSearchTerms(this.state.currentFridge);
  }

  // TODO: If current fridge is empty render some sort of useful message to the screen for the user.

  render() {
    const { currentFridge } = this.state;

    return (
      <>
        <Container>
          <h1>This is your fridge.</h1>
          <Form onSubmit={this.handleAddFoodItem}>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <Button type="submit">Add Food</Button>
                </InputGroupAddon>
                <Input
                  id="search"
                  name="name"
                  onChange={this.handleChange}
                  placeholder="Search for item."
                />
              </InputGroup>
            </FormGroup>
          </Form>
          {currentFridge ? (
            <h1> stuff in your fridge</h1>
          ) : (
            <h2>nothing here!</h2>
          )}
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
            <Button onClick={this.handleApiCall}>Search Recipes</Button>
          </Link>
        </Container>
      </>
    );
  }
}

export default Fridge;
