import React, { useState, useEffect } from 'react';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import SkeletonRecipe from '../../components/skeletons/SkeletonRecipe';
import { Typography } from '@material-ui/core';
import * as recipeAPI from '../../services/recipeService';

const Results = ({ location }) => {
  const currentIngredients = location.state.generalSearchTerms;
  const mealType = location.state.mealType;
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    getRecipes();
    console.log(recipes);
  }, []);

  const getRecipes = async () => {
    const response = await recipeAPI.searchApi(currentIngredients, mealType);
    setRecipes(response.results);
  };
  return (
    <>
      <Typography variant="h2" component="h1" align="center">
        Recipe Results:
      </Typography>
      {recipes &&
        recipes.map((recipe) => (
          <RecipeCard
            details={recipe}
            currentIngredients={currentIngredients}
          />
        ))}

      {!recipes &&
        [1, 2, 3, 4, 5].map((n) => <SkeletonRecipe key={n} theme="light" />)}
    </>
  );
};

export default Results;
