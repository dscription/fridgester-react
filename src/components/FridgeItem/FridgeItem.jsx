import React from 'react';
import { Button, Card, CardContent, CardActions } from '@material-ui/core';

const FridgeItem = ({ item, handleRemoveFoodItem }) => {
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
        onClick={() => handleRemoveFoodItem(_id)}
      >
        Remove
      </Button>
      <CardActions></CardActions>
    </Card>
  );
};

export default FridgeItem;
