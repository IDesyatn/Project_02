
function renderTable(table) {
  const tBody = document.getElementById('tbody');
  tBody.innerHTML = '';

  for(let i = 0; i < table.length; i++){
    const elementTr = document.createElement('tr');
    elementTr.classList.add('table__body-tr');
    elementTr.setAttribute('data-index', table[i].id);
    elementTr.innerHTML = `
        <td class='tr__td td-firstName'>${table[i].fname}</td>
        <td class='tr__td td-lastName'>${table[i].lname}</td>
        <td class='tr__td td-age'>${table[i].age}</td>
        <td class='tr__td td-city'>${table[i].city}</td>
        <td class='tr__td td-phoneNumber'>${table[i].phoneNumber}</td>
        <td class='tr__td td-email'>${table[i].email}</td>
        <td class='tr__td td-companyName'>${table[i].companyName}</td>
        `;
    tBody.append(elementTr);
  }
}
