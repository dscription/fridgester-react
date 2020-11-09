import tokenService from './tokenService';
const BASE_URL = '/api/users/';

export function createFridgeItem(fridgeItem) {
  return fetch(
    BASE_URL + 'add',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + tokenService.getToken(),
      },
      body: JSON.stringify(fridgeItem),
    },
    { mode: 'cors' }
  ).then((res) => res.json());
}

export function removeFridgeItem(fridgeItemId) {
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
