import React from 'react';
import { Input } from 'reactstrap';
import styled from 'styled-components';

const ShoppingList = ({ location }) => {
  return (
    <>
      <Container>
        <h1>Shopping List</h1>
        <ul>
          {location.state.ingredients.map((ingredient) => (
            <li>
              <Input type="checkbox" aria-label="checkbix for ingredient" />
              {ingredient}
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
  // TODO: Render a shopping list as a checklist. When the user clicks done shopping the checked items get added to the fridge.
};

export default ShoppingList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: solid black 1px;
  padding: 5px;
`;
