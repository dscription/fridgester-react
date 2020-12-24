import React from 'react';
import { Button, Card, CardContent, CardActions } from '@material-ui/core';

const FridgeItem = ({ item, handleRemoveFoodItem }) => {
  const handleClick = (e) => {
    // e.preventDefault();
    const fridgeItemId = e.target.value;
    console.log(fridgeItemId);
    handleRemoveFoodItem(fridgeItemId);
  };

  const { _id, name } = item;

  return (
    <Card variant="outlined">
      <CardContent>
        <h3>{name}</h3>
      </CardContent>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={handleClick}
        value={_id}
      >
        Remove
      </Button>
      <CardActions></CardActions>
    </Card>
  );
};

export default FridgeItem;
