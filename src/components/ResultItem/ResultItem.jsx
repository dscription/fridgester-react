import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import * as fridgeItemAPI from '../../services/fridgeItemService';

import {
  Card,
  CardImg,
  // CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';

const RecipeResult = ({ details, fridgeIngredients }) => {
  const { title, href, ingredients, thumbnail } = details;
  const ingr = ingredients.split(', ');


  return (
    <Container>
      <Card>
        <CardImg top width="50%" src={thumbnail} alt="Image of Recipe" />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <ul>
            {ingr.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
        </CardBody>
        <Button color="primary">Shopping List</Button>
        {/* <Button onClick(fridgeItemAPI.favoriteRecipe()) color="success"> */}
          {/* <FontAwesomeIcon icon={faHeart} />
        </Button> */}
      </Card>
    </Container>
  );
};

const Container = styled.div`
  margin: 10px 5px;
`;

export default RecipeResult;
