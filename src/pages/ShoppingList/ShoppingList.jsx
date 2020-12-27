import React, { Component } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography,
} from '@material-ui/core';
import * as fridgeItemAPI from '../../services/fridgeItemService';

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
      newFridgeItems.push({ name: newFridgeItem });
      this.setState({ newFridgeItems });
    }
  };

  handleDoneShopping = async () => {
    const { newFridgeItems } = this.state;
    if (newFridgeItems.length > 0) {
      await fridgeItemAPI.createFridgeItem(newFridgeItems);
      window.location = this.props.location.state.recipeLink;
    } else {
      window.location = this.props.location.state.recipeLink;
    }
  };

  render() {
    const { state } = this.props.location;
    const { ingredients } = state;
    const { currentIngredients } = state;
    return (
      <Card>
        <Typography variant="32" component="h1" align="center">
          Shopping List
        </Typography>
        <CardContent align="center">
          <FormControl>
            {ingredients.map((ingredient) =>
              currentIngredients.includes(ingredient) ? (
                <FormControlLabel
                  value={ingredient}
                  control={<Checkbox color="pirmary" />}
                  label={<Typography variant="h4">{ingredient}</Typography>}
                  labelPlacement="end"
                  checked={true}
                />
              ) : (
                <FormControlLabel
                  value={ingredient}
                  control={<Checkbox color="pirmary" />}
                  label={<Typography variant="h4">{ingredient}</Typography>}
                  labelPlacement="end"
                  onClick={this.handleCheckInput}
                />
              )
            )}
          </FormControl>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleDoneShopping}
          >
            Finish Shopping & View Recipe
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default ShoppingList;
