import React from 'react';
import RecipeResult from '../../components/RecipeResult/RecipeResult';

const Results = ({ results, location }) => {
  const currentIngredients = location.state.generalSearchTerms;

  return (
    <>
      <h1>Recipe Results:</h1>
      {results.map((result) => (
        <RecipeResult
          details={result}
          currentIngredients={currentIngredients}
        />
      ))}
    </>
  );
};

export default Results;
