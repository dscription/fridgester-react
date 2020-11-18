import React from 'react';
import { Input, Button } from 'reactstrap';
import styled from 'styled-components';

const ShoppingList = ({ location }) => {
  const { state } = location;
  const { ingredients } = state;
  const { currentIngredients } = state;
  console.log(currentIngredients);

  // TODO: If ingredient is already in fridge, mark item as checked
  // TODO: If use checks and item add it to state object.

  // TODO: Once use clicks done shopping all items in state object will be added to the users fridge.
  const handleDoneShopping = () => {
    console.log('done');
    // Call a fridgeService function that will take all the items from state and pass them to the controller function to create fridge items.
  };

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
                />
                {ingredient}
              </li>
            )
          )}
        </ul>
        <Button onClick={handleDoneShopping} color="success">
          Done Shopping
        </Button>
      </Container>
    </>
  );
};

export default ShoppingList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: solid black 1px;
  padding: 5px;
`;
