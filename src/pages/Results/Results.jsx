import React, { useState, useEffect } from 'react';
import RecipeResult from '../../components/RecipeResult/RecipeResult';
import SkeletonRecipe from '../../components/skeletons/SkeletonRecipe';
import { Typography } from '@material-ui/core';
import * as recipeAPI from '../../services/recipeService';

const Results = ({ location }) => {
  const currentIngredients = location.state.generalSearchTerms;
  const [recipes, setRecipes] = useState(null);
  useEffect(() => {
    getRecipes()
  }, []);

  const getRecipes = async () => {
    const response = await recipeAPI.searchApi(currentIngredients)
    setRecipes(response.results)
  }
  return (
    <>
      <Typography variant="h2" component="h1" align="center">
        Recipe Results:
      </Typography>
      {recipes &&
        recipes.map((result) => (
          <RecipeResult
            details={result}
            currentIngredients={currentIngredients}
          />
        ))}

      {!recipes &&
        [1, 2, 3, 4, 5].map((n) => <SkeletonRecipe key={n} theme="light" />)}
    </>
  );
};

export default Results;
