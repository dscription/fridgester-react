import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const FridgeItem = ({ item, handleRemoveFoodItem }) => {
  const handleClick = (e) => {
    // e.preventDefault();
    const fridgeItemId = e.target.value;
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
    <Card>
      <h1>{name}</h1>
      <Button onClick={handleClick} value={_id} color="danger">
        -
      </Button>
    </Card>
  );
};

const Card = styled.div`
  margin: 5px;
  border: solid 3px black;
`;

export default FridgeItem;
