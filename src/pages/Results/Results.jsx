import React, { Component, useState, useEffect } from 'react';
import styled from 'styled-components';
import RecipeResult from '../../components/RecipeResult/RecipeResult';

const Results = ({ results, location }) => {
  const currentIngredients = location.state.generalSearchTerms;

  const [recipes, setRecipes] = useState(results);

  return (
    <>
      <Container>
        <h1>results</h1>
        {recipes.map((result) => (
          <RecipeResult
            details={result}
            currentIngredients={currentIngredients}
          />
        ))}
      </Container>
    </>
  );
};

export default Results;

const Container = styled.div`
  border: solid black 1px;
  padding: 5px;
`;
