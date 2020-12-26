import React from 'react';
import { Button, Card, CardContent, Typography } from '@material-ui/core';

const FridgeItem = ({ item, handleRemoveFoodItem }) => {
  const { _id, name } = item;
  return (
    <Card variant="outlined" style={{ margin: '10px 0' }}>
      <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4" component="h3">{name}</Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => handleRemoveFoodItem(_id)}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  );
};

export default FridgeItem;
