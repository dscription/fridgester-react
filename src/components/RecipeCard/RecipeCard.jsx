import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core';
import SkeletonRecipe from '../skeletons/SkeletonRecipe';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: '10px auto',
  },
  red: {
    color: 'red',
  },
  black: {
    color: 'black'
  }
}));

const RecipeCard = ({ details, currentIngredients }) => {
  const classes = useStyles();
  const { title, ingredients, thumbnail, href } = details;
  const ingr = ingredients.split(', ');

  return (
    <Card className={classes.root}>
      <CardHeader title={title} />
      <CardMedia component="img" src={thumbnail ? thumbnail : 'https://i.imgur.com/iYhSQba.png'} title={title} />
      <CardContent>
        <Typography variant="h4" component="p">
          Ingredients:
        </Typography>
        {ingr.map((ingredient) =>(
        <Typography variant="h5" component="span" className={currentIngredients.includes(ingredient) ? classes.red : classes.black}> {ingredient},</Typography>
          
        ))}
      </CardContent>
      
      <CardActions style={{justifyContent:'center'}}>
        <Link
          to={{
            pathname: '/shopping-list',
            state: {
              ingredients: ingr,
              currentIngredients: currentIngredients,
              recipeLink: href
            },
          }}
        >
          <Button variant="contained" color="primary">
            Create Shopping List
          </Button>
        </Link>
      </CardActions>
      
    </Card>
  );
};

export default RecipeCard;
