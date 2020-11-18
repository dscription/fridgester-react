import React from 'react';
import { Input } from 'reactstrap';

const ShoppingList = ({ location }) => {
  return (
    <>
      <h1>Shopping List</h1>
      <ul>
        {location.state.ingredients.map((ingredient) => (
          <li>
            <Input type="checkbox" aria-label="checkbix for ingredient" />
            {ingredient}
          </li>
        ))}
      </ul>
    </>
  );
  // TODO: Render a shopping list as a checklist. When the user clicks done shopping the checked items get added to the fridge.
};

export default ShoppingList;
