import React from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  TextField,
  Typography,
  InputLabel,
  Card,
  CardContent,
} from '@material-ui/core';

const Landing = () => {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '90vh',
      }}
    >
      <Card style={{ width: '300px', margin: '0px auto' }}>
        <CardContent>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            With Fridgester you can keep track of the food in your refrigerator,
            search for recipes, and create a shopping list to help you plan your
            next meal when you are on the go.
          </Typography>
          <Typography variant="h5" component="h1" gutterBottom>
            Please Login or Signup.
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Link to="/login">
              <Button variant="contained" color="info">
                <Typography variant="h5">Login</Typography>
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="contained" color="primary">
                <Typography variant="h5">Signup</Typography>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default Landing;
