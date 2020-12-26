import React from 'react';
import RecipeResult from '../../components/RecipeResult/RecipeResult';
import {Typography} from '@material-ui/core'

const Results = ({ results, location }) => {
  const currentIngredients = location.state.generalSearchTerms;

  return (
    <>
      <Typography variant="h2" component="h1" align="center">Recipe Results:</Typography>
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
