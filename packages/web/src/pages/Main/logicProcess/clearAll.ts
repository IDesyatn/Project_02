import { removeChild } from '../../../ts/utils';

export function clearAll(state) {
  const url = `main/data`;
  const data = { db: state.DB, truncate: true };
  fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => {
      state.currentData = null;
      removeChild('tbody');
      return true;
    })
    .catch(() => {
      return false;
    });
}

