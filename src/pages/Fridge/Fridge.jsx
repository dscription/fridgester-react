import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Container from "../../styledComponents/Container";

class Fridge extends Component {
  state = {
    //state will hold some sample food items which will be added to the user object in the database as soon as the user is created. 
    // Once the user gets to this page they can remove the foods and add their own.
    fridgeItems: [
        'bread',
        'cheese',
        'milk',
        'spinach',
        'eggs',
        'chicken'
    ]

  };
  render() {
    const { fridgeItems } = this.state;
    return (
      <>
        <Container>
          <h1>This is your fridge.</h1>
          <Form>
            <FormGroup>
              <Label for="search">Search</Label>
              <Input id="search" placeholder="Search for item."></Input>
            </FormGroup>
          </Form>
          {/* Search Results Map */}
          {fridgeItems.map((item, index) => (
            <h1>{item}</h1>
          ))}
        </Container>
      </>
    );
  }
}

export default Fridge;
