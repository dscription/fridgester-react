import tokenService from './tokenService';
const BASE_URL = '/api/fridgeItems/';

// TODO: create fridgeItem 
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

// TODO: get one frideItem
export function getOneFridgeItem(fridgeItemId) {
  return fetch(
    `${BASE_URL}${fridgeItemId}`,
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

// TODO: update fridge item. This is not important yet since I am not adding the fridge item details features just yet.
export function updateFridgeItem(fridgeItemId) {
  return fetch(
    `${BASE_URL}${fridgeItemId}`,
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

// TODO: delete fridge item
export function deleteFridgeItem(fridgeItemId) {
  return fetch(
    `${BASE_URL}${fridgeItemId}`,
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







// TODO: Fix this issue with Edamam. We have an SEI resource on using a proxy for this problem.
// export function searchApi(query) {
//   console.log(query);
//   return fetch(
//     `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}&from=0&to=10`,
//     {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': 'http://localhost:3000',
//       },
//     },
//     { mode: 'cors' }
//   )
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));
// }

export function searchApi(query) {
  const results = [
    {
      title: 'Chicken - Handy Sandwich',
      href: 'http://www.cooks.com/rec/view/0,1644,152182-233199,00.html',
      ingredients:
        'cream of mushroom soup, chicken, chicken gravy, water chestnuts, onions',
      thumbnail: '',
    },
    {
      title: 'Honey-Rosemary Lamb Sandwich',
      href:
        'http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=1147515',
      ingredients:
        'lamb, onions, garlic, tomato, honey, rosemary, salt, sandwich rolls, goat cheese, spinach',
      thumbnail: 'http://img.recipepuppy.com/524998.jpg',
    },
    {
      title: 'Chicken-Vegetable Sandwich Filling',
      href:
        'http://www.bigoven.com/64232-Chicken-Vegetable-Sandwich-Filling-recipe.html',
      ingredients: 'chicken, carrot, celery, onions, salad dressing',
      thumbnail: '',
    },
    {
      title: 'Chicken Sandwich Casserole',
      href:
        'http://allrecipes.com/Recipe/Chicken-Sandwich-Casserole/Detail.aspx',
      ingredients:
        'celery, cheddar cheese, chicken, eggs, mayonnaise, milk, onions, salt, bread',
      thumbnail: '',
    },
    {
      title: 'Gourmet Spinach Sandwich',
      href: 'http://www.recipezaar.com/Gourmet-Spinach-Sandwich-330087',
      ingredients:
        'dijon mustard, spinach, mayonnaise, olive oil, salt, mushroom, swiss cheese, onions, wheat bread',
      thumbnail: '',
    },
    {
      title: 'Chicken Salad Sandwich Recipe',
      href:
        'http://www.cdkitchen.com/recipes/recs/2019/Chicken-Salad-Sandwich100732.shtml',
      ingredients: 'celery, chicken, grapes, miracle whip, onions, pecan',
      thumbnail: '',
    },
    {
      title: 'Chicken, Brie,  Onions and Mango Chutney on Focaccia Sandwich',
      href:
        'http://www.recipezaar.com/Chicken-Brie-Onions-and-Mango-Chutney-on-Focaccia-Sandwich-310912',
      ingredients:
        'brie cheese, chicken, focaccia bread, olive oil, mango chutney, onions',
      thumbnail: '',
    },
    {
      title: 'Baked Chicken Sandwich',
      href: 'http://www.cooks.com/rec/view/0,1944,148191-232201,00.html',
      ingredients:
        'cream of mushroom soup, chicken gravy, water chestnuts, chicken, pimiento, onions',
      thumbnail: '',
    },
    {
      title: 'Steak Sandwich Deluxe',
      href: 'http://www.cooks.com/rec/view/0,1944,156171-248199,00.html',
      ingredients:
        'swiss cheese, sirloin steak, spinach, sandwich rolls, onions, tomato',
      thumbnail: '',
    },
    {
      title: 'Spinach And Egg Sandwich',
      href: 'http://www.cooks.com/rec/view/0,1944,153166-246193,00.html',
      ingredients: 'mayonnaise, celery, eggs, spinach, salt, onions',
      thumbnail: '',
    },
  ];

  return results;
}
