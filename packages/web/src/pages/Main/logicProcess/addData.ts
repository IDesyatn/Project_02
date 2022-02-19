import{removeChild} from "../../../ts/utils";

export function renderTable(table) {
  const tBody = document.getElementById('tbody');
  tBody.innerHTML = '';

  for(let i = 0; i < table.length; i++){
    const elementTr = document.createElement('tr');
    elementTr.classList.add('table__body-tr');
    elementTr.setAttribute('data-index', table[i].id);
    elementTr.setAttribute('id', table[i].id);
    elementTr.innerHTML = `
        <td class='tr__td td-id'>${table[i].id}</td>
        <td class='tr__td td-firstName'>${table[i].firstName}</td>
        <td class='tr__td td-lastName'>${table[i].lastName}</td>
        <td class='tr__td td-age'>${table[i].age}</td>
        <td class='tr__td td-phoneNumber'>${table[i].phoneNumber}</td>
        <td class='tr__td td-city'>${table[i].city}</td>
        <td class='tr__td td-email'>${table[i].email}</td>
        <td class='tr__td td-companyName'>${table[i].company}</td>
        `;
    tBody.append(elementTr);
  }
}


export function sortTable(state, filter) {
  switch (filter){
    case 'id':
      state.SortedData = state.Data.sort((a, b) => (a.id > b.id) ? 1 : -1);
      break;
    case 'firstName':
      state.SortedData = state.Data.sort((a, b) => (a.firstName.toLowerCase().toString() > b.firstName.toLowerCase().toString()) ? 1 : -1);
      break;
    case 'lastName':
      state.SortedData = state.Data.sort((a, b) => (a.lastName.toLowerCase().toString() > b.lastName.toLowerCase().toString()) ? 1 : -1);
      break;
    case 'age':
      state.SortedData = state.Data.sort((a, b) => (a.age > b.age) ? 1 : -1);
      break;
    case 'phoneNumber':
      state.SortedData = state.Data.sort((a, b) => (a.phoneNumber > b.phoneNumber) ? 1 : -1);
      break;
    case 'city':
      state.SortedData = state.Data.sort((a, b) => (a.city.toLowerCase().toString() > b.city.toLowerCase().toString()) ? 1 : -1);
      break;
    case 'email':
      state.SortedData = state.Data.sort((a, b) => (a.email.toLowerCase() > b.email.toLowerCase()) ? 1 : -1);
      break;
    case 'company':
      state.SortedData = state.Data.sort((a, b) => (a.company.toLowerCase() > b.company.toLowerCase()) ? 1 : -1);
      break;
  }

  removeChild('tbody');
  renderTable(state.SortedData);
  console.log(state.SortedData);
}


