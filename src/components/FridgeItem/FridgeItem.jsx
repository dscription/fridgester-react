import React from 'react';
import {ItemCard} from '../styled_components'
import {Button} from '@material-ui/core'



const FridgeItem = ({ item, handleRemoveFoodItem }) => {

  const handleClick = (e) => {
    // e.preventDefault();
    const fridgeItemId = e.target.value;
    console.log(fridgeItemId)
    handleRemoveFoodItem(fridgeItemId);
  };

  const {
    _id,
    name,
    // expiration,
    // isPerishable,
    // isExpired,
    // image,
    // dateAdded,
    // dateRemoved,
  } = item;

  return (
    <ItemCard>
      <h1>{name}</h1>
      <Button variant="contained" color="secondary" onClick={handleClick} value={_id}>
        Remove
      </Button>
    </ItemCard>
  );
};


export default FridgeItem;
