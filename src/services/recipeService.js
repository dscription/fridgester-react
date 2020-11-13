import tokenService from './tokenService';
const BASE_URL = '/api/recipes/';

export function favoriteRecipe(fridgeItemId) {
  return fetch(
    `${BASE_URL}${fridgeItemId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
      body: JSON.stringify(fridgeItemId),
    },
    { mode: 'cors' }
  ).then((res) => res.json());
}

// TODO: get all favorite recipes
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
  ).then((res) => res.json());
}

// TODO: favorite a recipe (create)
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

// TODO: get one favorite recipe
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

// TODO: update a favorited recipe
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

// TODO: delete a favorite recipe
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
