import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import styled from 'styled-components';

class ShoppingList extends Component {
  state = { newFridgeItems: [] };

  handleCheckInput = (e) => {
    // e.preventDefault();
    const newFridgeItem = e.target.value;

    if (this.state.newFridgeItems.includes(newFridgeItem)) {
      const newFridgeItems = [...this.state.newFridgeItems];
      newFridgeItems.splice(
        this.state.newFridgeItems.indexOf(newFridgeItem),
        1
      );
      this.setState({ newFridgeItems });
    } else {
      const newFridgeItems = [...this.state.newFridgeItems];
      newFridgeItems.push(newFridgeItem);
      this.setState({ newFridgeItems });
    }
  };

  // TODO: Once use clicks done shopping all items in state object will be added to the users fridge.
  handleDoneShopping = () => {
    console.log('done');
    // Call a fridgeService function that will take all the items from state and pass them to the controller function to create fridge items.
  };

  render() {
    const { state } = this.props.location;
    const { ingredients } = state;
    const { currentIngredients } = state;
    return (
      <>
        <Container>
          <h1>Shopping List</h1>
          <ul>
            {ingredients.map((ingredient) =>
              currentIngredients.includes(ingredient) ? (
                <li>
                  <Input
                    type="checkbox"
                    aria-label={`checkbox input for $(ingredient)`}
                    disabled
                  />
                  {ingredient}
                </li>
              ) : (
                <li>
                  <Input
                    type="checkbox"
                    aria-label={`checkbox input for $(ingredient)`}
                    value={ingredient}
                    onChange={this.handleCheckInput}
                  />
                  {ingredient}
                </li>
              )
            )}
          </ul>
          <Button onClick={this.handleDoneShopping} color="success">
            Done Shopping
          </Button>
        </Container>
      </>
    );
  }
}

export default ShoppingList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: solid black 1px;
  padding: 5px;
`;
