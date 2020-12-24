import React from 'react';
import {ItemCard, Button} from '../styled_components'



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
      <Button color="red" onClick={handleClick} value={_id}>
        Remove
      </Button>
    </ItemCard>
  );
};


export default FridgeItem;
