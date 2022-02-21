import { removeChild } from '../../../ts/utils';
import { getData } from './getData';
import { openAndClose } from '../logic';

export function addNewPersonRequest(state, data) {
  console.log('createPerson');
  const url = `main/data`;
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => {
      removeChild('tbody');
      getData(state);
      return true;
    })
    .catch(() => false);
}

export function readField(id) {
  const result = (document.getElementById(id) as HTMLInputElement).value;

  if (result) {
    return result;
  }
  return null;
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

  const formData = {
    db: state.DB,
    firstName,
    lastName,
    age,
    city,
    phoneNumber,
    email,
    company,
  };
  addNewPersonRequest(state.url, formData);
}
