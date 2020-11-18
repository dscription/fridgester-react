import tokenService from './tokenService';
const BASE_URL = '/api/fridgeItems/';

export function getCurrentFridgeItems() {
  console.log('getting current fridge');
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



