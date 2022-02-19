
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


/*
//////////////////////////////////////////////////////// ==================    SORT
const id = list.sort((a, b) => (a.id < b.id) ? 1 : -1)
const firstName = list.sort((a, b) => (a.firstName.toLowerCase() > b.firstName.toLowerCase()) ? 1 : -1)
const lastName = list.sort((a, b) => (a.lastName.toLowerCase() > b.lastName.toLowerCase()) ? 1 : -1)
const age = list.sort((a, b) => (a.age > b.age) ? 1 : -1)
const phone = list.sort((a, b) => (a.phone > b.phone) ? 1 : -1)
const city = list.sort((a, b) => (a.city.toLowerCase() > b.city.toLowerCase()) ? 1 : -1)
const email = list.sort((a, b) => (a.email.toLowerCase() > b.email.toLowerCase()) ? 1 : -1)
const company = list.sort((a, b) => (a.company.toLowerCase() > b.company.toLowerCase()) ? 1 : -1)



const id = document.getElementById('id')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const age = document.getElementById('age')
const phone = document.getElementById('phone')
const city = document.getElementById('city')
const email = document.getElementById('email')
const company = document.getElementById('company')


id.addEventListener('', (table) => {
  const id = table.sort((a, b) => (a.id < b.id) ? 1 : -1)
  renderTable(id)
})
firstName.addEventListener('', (table) => {
  const firstName = table.sort((a, b) => (a.firstName.toLowerCase() > b.firstName.toLowerCase()) ? 1 : -1)
  renderTable(firstName)
})
lastName.addEventListener('', (table) => {
  const lastName = table.sort((a, b) => (a.lastName.toLowerCase() > b.lastName.toLowerCase()) ? 1 : -1)
  renderTable(lastName)
})
age.addEventListener('', (table) => {
  const age = table.sort((a, b) => (a.age > b.age) ? 1 : -1)
  renderTable(age)
})
phone.addEventListener('', (table) => {
  const phone = table.sort((a, b) => (a.phone > b.phone) ? 1 : -1)
  renderTable(phone)
})
city.addEventListener('', (table) => {
  const city = table.sort((a, b) => (a.city.toLowerCase() > b.city.toLowerCase()) ? 1 : -1)
  renderTable(city)
})
email.addEventListener('', (table) => {
  const email = table.sort((a, b) => (a.email.toLowerCase() > b.email.toLowerCase()) ? 1 : -1)
  renderTable(email)
})
company.addEventListener('', (table) => {
  const company = table.sort((a, b) => (a.company.toLowerCase() > b.company.toLowerCase()) ? 1 : -1)
  renderTable(company)
})

*/
