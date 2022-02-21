// import { removeChild } from '../../../ts/utils';

import { renderTable } from './addData';

export function getData(state) {
  const table = document.getElementById('tbody');
  table.innerHTML = '';
  const db = window.localStorage.getItem('selectDB');
  fetch('/main/data/get', {
    method: 'POST',
    body: JSON.stringify({
      db: db || state.DB,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response: Response) => response.json())
    .then((data) => {
      state.Data = data;
      // data.forEach((el) => {
      //   const row = document.createElement('tr');
      //   row.innerHTML = `<td>${el.id}</td><td>${el.firstName}</td><td>${el.lastName}</td>
      // <td>${el.age}</td><td>${el.phoneNumber}</td><td>${el.city}</td><td>${el.email}</td>
      // <td>${el.company}</td>`;
      //   table.appendChild(row);
      // });
      renderTable(state);

      // data.forEach((element) => {
      //   state.Data.push(element);
      //   console.log(state.Data);
      // });
      // добавить функцию вывода в таблицу
      return true;
    })
    .catch((err) => {
      return false;
    });
}
