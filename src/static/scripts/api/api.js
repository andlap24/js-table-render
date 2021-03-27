/* eslint-disable no-console */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getDataFromServer = (data, start, end) => {
  // eslint-disable-next-line no-undef
  return fetch(`${BASE_URL}/${data}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} - ${response.statusText}`);
    })
    .then(dataFromServer => dataFromServer.slice(start, end).map(post => post))
    .catch(err => console.log(err));
};
