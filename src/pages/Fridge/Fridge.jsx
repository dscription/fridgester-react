import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Breadcrumb,
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
    fridgeItems: this.props.user.currentFridge,
    generalSearchTerms: [],
  };

  handleAddFoodItem = async (e) => {
    e.preventDefault();
    const { formData } = this.state;
    const newFridge = await fridgeItemAPI.createFridgeItem(formData);
    this.setState({ fridgeItems: newFridge });
    this.updateGeneralSearchTerms(this.state.fridgeItems)

  };

  handleRemoveFoodItem = async (fridgeItemId) => {
    const newFridge = await fridgeItemAPI.removeFridgeItem(fridgeItemId);
    this.setState({ fridgeItems: newFridge });
    this.updateGeneralSearchTerms(this.state.fridgeItems)
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

  componentDidMount() {
    this.updateGeneralSearchTerms(this.state.fridgeItems)
  }

 

  render() {
    const { fridgeItems } = this.state;
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

          {fridgeItems.map((item, index) => (
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
            <Button>Search Recipes</Button>
          </Link>
        </Container>
      </>
    );
  }
}

export default Fridge;
