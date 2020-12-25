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
import './RecipeResult.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

const RecipeResult = ({ details, currentIngredients }) => {
  const classes = useStyles();
  const { title, ingredients, thumbnail } = details;
  const ingr = ingredients.split(', ');

  return (
    <Card className={classes.root}>
      <CardHeader title={title} />
      <CardMedia
        component="img"
        src={thumbnail}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Ingredients:
          {ingr.map((ingredient) =>
            currentIngredients.includes(ingredient) ? (
              <span className="red">{ingredient}, </span>
            ) : (
              <span>{ingredient}, </span>
            )
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to={{
            pathname: '/shopping-list',
            state: {
              ingredients: ingr,
              currentIngredients: currentIngredients,
            },
          }}
        >
          <Button variant="contained" color="primary">Create Shopping List</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default RecipeResult;
