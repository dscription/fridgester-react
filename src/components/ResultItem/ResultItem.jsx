import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const ResultItem = ({ details }) => {
  const { title, href, ingredients } = details;
  const ingr = ingredients.split(", ")
  return (
    <Card>
      <h1>{title}</h1>
      <h1>{href}</h1>
      <ul>
        {ingr.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </Card>
  );
};

const Card = styled.div`
  margin: 5px;
  border: solid 3px black;
`;

export default ResultItem;
