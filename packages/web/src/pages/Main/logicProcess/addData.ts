import { removeChild } from '../../../ts/utils';
import { selectedRow } from './selectedRowLogic';
import { searchPerson } from './searchPerson';

export function renderTable(state) {
  removeChild('tbody');
  sortTable(state, state.SortBy);
  searchPerson(state);
  const sortedData = state.SortedData;
  const tBody = document.getElementById('tbody');
  tBody.innerHTML = '';

  if (sortedData.length === 0) {
    const elemtTr = document.createElement('tr');
    elemtTr.classList.add('table__empty');
    elemtTr.innerHTML = `
      <td class='table__empty-message' colspan='8'>There is no data in the database</td>
      `;
    tBody.append(elemtTr);
  } else {
    for (let i = 0; i < sortedData.length; i++) {
      const elementTr = document.createElement('tr');
      elementTr.classList.add('table__body-tr');
      if (state.DB === 'mySql') {
        elementTr.setAttribute('data-index', sortedData[i]._id);
        elementTr.setAttribute('id', sortedData[i]._id);
        elementTr.innerHTML = `
        <td class='tr__td td-id'>${sortedData[i]._id}</td>
        <td class='tr__td td-firstName'>${sortedData[i].firstName}</td>
        <td class='tr__td td-lastName'>${sortedData[i].lastName}</td>
        <td class='tr__td td-age'>${sortedData[i].age}</td>
        <td class='tr__td td-phoneNumber'>${sortedData[i].phoneNumber}</td>
        <td class='tr__td td-city'>${sortedData[i].city}</td>
        <td class='tr__td td-email'>${sortedData[i].email}</td>
        <td class='tr__td td-companyName'>${sortedData[i].company}</td>
        `;
        tBody.append(elementTr);
      } else {
        elementTr.setAttribute('data-index', sortedData[i].id);
        elementTr.setAttribute('id', sortedData[i].id);
        elementTr.innerHTML = `
        <td class='tr__td td-id'>${sortedData[i].id}</td>
        <td class='tr__td td-firstName'>${sortedData[i].firstName}</td>
        <td class='tr__td td-lastName'>${sortedData[i].lastName}</td>
        <td class='tr__td td-age'>${sortedData[i].age}</td>
        <td class='tr__td td-phoneNumber'>${sortedData[i].phoneNumber}</td>
        <td class='tr__td td-city'>${sortedData[i].city}</td>
        <td class='tr__td td-email'>${sortedData[i].email}</td>
        <td class='tr__td td-companyName'>${sortedData[i].company}</td>
        `;
        tBody.append(elementTr);
      }
    }
  }
  selectedRow(state);
}

export function sortTable(state, filter) {
  const data = state.Data.slice();
  switch (filter) {
    case 'id':
      if (state.DB === 'mySql') {
        state.SortedData = data.sort((a, b) => (a._id > b._id ? 1 : -1));
      } else {
        state.SortedData = data.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      break;
    case 'firstName':
      state.SortedData = data.sort((a, b) =>
        a.firstName.toLowerCase().toString() > b.firstName.toLowerCase().toString() ? 1 : -1,
      );
      break;
    case 'lastName':
      state.SortedData = data.sort((a, b) =>
        a.lastName.toLowerCase().toString() > b.lastName.toLowerCase().toString() ? 1 : -1,
      );
      break;
    case 'age':
      state.SortedData = data.sort((a, b) => (a.age > b.age ? 1 : -1));
      break;
    case 'phoneNumber':
      state.SortedData = data.sort((a, b) => (a.phoneNumber > b.phoneNumber ? 1 : -1));
      break;
    case 'city':
      state.SortedData = data.sort((a, b) =>
        a.city.toLowerCase().toString() > b.city.toLowerCase().toString() ? 1 : -1,
      );
      break;
    case 'email':
      state.SortedData = data.sort((a, b) =>
        a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1,
      );
      break;
    case 'company':
      state.SortedData = data.sort((a, b) =>
        a.company.toLowerCase() > b.company.toLowerCase() ? 1 : -1,
      );
      break;
  }
}
