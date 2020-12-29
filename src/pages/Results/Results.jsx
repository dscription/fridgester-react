import React, {useState,useEffect} from 'react';
import RecipeResult from '../../components/RecipeResult/RecipeResult';
import SkeletonRecipe from '../../components/skeletons/SkeletonRecipe'
import {Typography} from '@material-ui/core'
import * as recipeAPI from '../../services/recipeService';

const Results = ({ location }) => {
  const currentIngredients = location.state.generalSearchTerms;
  const [results, setResults] = useState(null)
  useEffect(async () => {
    const res = await recipeAPI.searchApi
    (currentIngredients)
    setResults(res)
  })

  return (
    <>
      <Typography variant="h2" component="h1" align="center">Recipe Results:</Typography>
      {results && (
        results.map((result) => (
        <RecipeResult
          details={result}
          currentIngredients={currentIngredients}
        />
      )))}
      {!results && <SkeletonRecipe />}
    </>
  );
};

export default Results;
