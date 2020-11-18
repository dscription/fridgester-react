import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './RecipeResult.css';

import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';

const RecipeResult = ({ details, currentIngredients, index, isFavorite }) => {
  const { title, href, ingredients, thumbnail, id } = details;
  const ingr = ingredients.split(', ');

  return (
    <Container>
      <Card>
        <CardImg top width="50%" src={thumbnail} alt="Image of Recipe" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <ul>
            {ingr.map((ingredient) =>
              currentIngredients.includes(ingredient) ? (
                <li className="red">{ingredient}</li>
              ) : (
                <li>{ingredient}</li>
              )
            )}
          </ul>
        </CardBody>

        <Link
          to={{
            pathname: '/shopping-list',
            state: {
              ingredients: ingr,
            },
          }}
        >
          <Button color="primary">Shopping List</Button>
        </Link>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  margin: 10px 5px;
`;

export default RecipeResult;
