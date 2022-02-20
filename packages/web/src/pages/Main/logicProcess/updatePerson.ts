import { removeChild, readField } from "../../../ts/utils";
import { getData } from "./getData";



export function updatePersonRequest(state, data) {
  console.log('updatePerson')
  const url = `main/data`;
  fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
    .then((response) => {
      removeChild('tbody');
      getData(state);
      return true;
    })
    .catch(() => {
      return false;
    });
}


export function updatePerson(state) {
    const firstName = readField('firstName');
    const lastName = readField('lastName');
    const age = readField('age');
    const city = readField('city');
    const phoneNumber = readField('phone');
    const email = readField('email');
    const company = readField('company');
;
    if (!firstName || !lastName) {
        return false;
    }

    const formData = { db:state.db, id:state.SelectedId, firstName: firstName, lastName: lastName, age: age, city: city, phoneNumber: phoneNumber, email: email, company: company };
    updatePersonRequest(state.url, formData);
}

