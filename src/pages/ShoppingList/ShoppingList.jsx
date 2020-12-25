import React, { Component } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Checkbox,
  CardHeader,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';

class ShoppingList extends Component {
  state = { newFridgeItems: [] };

  handleCheckInput = (e) => {
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


  handleDoneShopping = () => {
    console.log('done');
    // TODO: Call controller to create new fridge items
    // TODO: Set new fridge items to state.
  };

  render() {
    const { state } = this.props.location;
    const { ingredients } = state;
    const { currentIngredients } = state;
    return (
      <Card>
        <CardHeader title="Shopping List" />
        <CardContent>
          <FormControl>
            {ingredients.map((ingredient) =>
              currentIngredients.includes(ingredient) ? (
                <FormControlLabel
                  value={ingredient}
                  control={<Checkbox color="pirmary" />}
                  label={ingredient}
                  labelPlacement="end"
                  checked={true}
                />
              ) : (
                <FormControlLabel
                  value={ingredient}
                  control={<Checkbox color="pirmary" />}
                  label={ingredient}
                  labelPlacement="end"
                  onClick={this.handleCheckInput}
                />
              )
            )}
          </FormControl>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleDoneShopping}
          >
            Done Shopping
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default ShoppingList;

