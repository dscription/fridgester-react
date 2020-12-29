import tokenService from './tokenService';
const BASE_URL = '/api/recipes/';

export function favoriteRecipe(data) {
  return fetch(
    `${BASE_URL}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
      body: JSON.stringify(data),
    },
    { mode: 'cors' }
  ).then((res) => res.json());
}

export function getFavoriteRecipes() {
  return fetch(
    BASE_URL,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
    },
    { mode: 'cors' }
  ).then((res) => {
    res.json();
  });
}

export function createFridgeItem(data) {
  return fetch(
    BASE_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
      body: JSON.stringify(data),
    },
    { mode: 'cors' }
  ).then((res) => res.json());
}

export function getOneFavoriteRecipe(recipeId) {
  return fetch(
    `${BASE_URL}${recipeId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
    },
    { mode: 'cors' }
  ).then((res) => res.json());
}

export function updateFavoriteRecipe(recipeId) {
  return fetch(
    `${BASE_URL}${recipeId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
    },
    { mode: 'cors' }
  ).then((res) => res.json());
}

export function deleteFavoriteRecipe(recipeId) {
  return fetch(
    `${BASE_URL}${recipeId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
    },
    { mode: 'cors' }
  ).then((res) => res.json());
}

export function searchApi(query) {
  const foodType = 'sandwich';
  return fetch(
    `https://recipepuppyproxy.herokuapp.com/api/?i=${query}&q=${foodType}&p=3`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      },
    },
    { mode: 'cors' }
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));
}
