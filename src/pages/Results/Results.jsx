import React, { useState } from 'react';
import {Container} from '../../components/styled_components'
import RecipeResult from '../../components/RecipeResult/RecipeResult';

const Results = ({ results, location }) => {
  const currentIngredients = location.state.generalSearchTerms;

  return (
    <>
      <Container>
        <h1>Recipe Results:</h1>
        {results.map((result) => (
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


