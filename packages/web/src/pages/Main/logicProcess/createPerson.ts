import { removeChild } from "../../../ts/utils";
import { getData } from "./getData";
import { openAndClose } from "../logic";


export function addNewPersonRequest(state, data) {
  console.log('createPerson')
  const url = `main/data`;
  fetch(url, {
    method: 'POST',
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


export function addNewPerson(state) {
    const firstName = readField('firstName');
    const lastName = readField('lastName');
    const age = readField('age');
    const city = readField('city');
    const phoneNumber = readField('phone');
    const email = readField('email');
    const company = readField('company');
  
    if (!firstName || !lastName) {
        return false;
    }

    const formData = { db:state.db, firstName: firstName, lastName: lastName, age: age, city: city, phoneNumber: phoneNumber, email: email, company: company };
    addNewPersonRequest(state.url, formData);
}

export function readField(id) {
    let result = (document.getElementById(id) as HTMLInputElement).value;
    
    if(result) {
        return result; 
    }
    else {
        return null
    }
    
}