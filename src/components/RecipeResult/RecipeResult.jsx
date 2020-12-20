import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, CardBody, Button } from '../styled_components';
import './RecipeResult.css';

import { CardImg, CardTitle } from 'reactstrap';

const RecipeResult = ({ details, currentIngredients }) => {
  const { title, ingredients, thumbnail } = details;
  const ingr = ingredients.split(', ');

  return (
    <Container>
      <Card>
        <CardImg top width="50%" src={thumbnail} alt="Image of Recipe" />
        <CardBody>
          <h2>{title}</h2>
          <p>
            <strong>Ingredients: </strong>
            {ingr.map((ingredient) =>
              currentIngredients.includes(ingredient) ? (
                <span className="red">{ingredient}, </span>
              ) : (
                <span>{ingredient}, </span>
              )
            )}
          </p>
        </CardBody>

        <Link
          to={{
            pathname: '/shopping-list',
            state: {
              ingredients: ingr,
              currentIngredients: currentIngredients,
            },
          }}
        >
          <Button>Shopping List</Button>
        </Link>
      </Card>
    </Container>
  );
};

export default RecipeResult;
