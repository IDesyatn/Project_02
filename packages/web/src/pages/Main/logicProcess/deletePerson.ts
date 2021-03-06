import { getData } from './getData';
import { removeChild } from '../../../ts/utils';

export function deletePerson(state) {
  const url = `main/data`;
  const data = { db: state.DB, id: state.SelectedId, truncate: false };
  fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => {
      state.SelectedId = undefined;
      removeChild('tbody');
      getData(state);
      return true;
    })
    .catch(() => {
      return false;
    });
}
