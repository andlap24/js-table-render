/* eslint-disable no-console */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getDataFromServer = (data, start, end) => {
  return global.fetch(`${BASE_URL}/${data}`)
    .then(response => (!response.ok
      ? new Error(`${response.status} - ${response.statusText}`)
      : response.json()))
    .then(dataFromServer => dataFromServer.slice(start, end).map(post => post));
};
