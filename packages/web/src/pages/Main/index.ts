import './style.scss';
import { languageHandle } from '../../ts/localization';
import { themeHandler } from '../../ts/themeHandler';
import {
  openAndClose,
  selectedRow,
  selectDB,
  firstNameValidation,
  lastNameValidation,
  ageValidation,
  cityValidation,
  phoneValidation,
  emailValidation,
  companyValidation,
  settingsLoginValidation,
  settingsNewLoginValidation,
  settingsCurrentPassValidation,
  settingsRepeatPassValidation,
  showPass,
  updateAccount,
} from './logic';
import { addListener } from '../../ts/utils';
import { loginValidation, passwordValidation, validateStatusCheck } from '../Login/logic';
import { clearAll } from './logicProcess/clearAll';
import { changeDB } from './logicProcess/changeDB';
import { getData } from './logicProcess/getData';
import { addNewPerson } from './logicProcess/createPerson';
import {renderTable} from './logicProcess/addData'
import { deletePerson } from './logicProcess/deletePerson';

const openModal = document.querySelectorAll('.modal__open');

openModal.forEach((button) => {
  button.addEventListener('click', (event) => {
    // @ts-ignore
    const modalTarget = <HTMLButtonElement>event.target.dataset.modal;
    openAndClose(modalTarget);
  });
});

function init() {
  const state = {
    DB: '/mysql',
    Data: null,
    SortedData: null,
    SelectedId: null,
    SelectedObj: null,
    validateStatus: [false, false],
  };

  const test = { id: 1, fname: 'Name', lname: 'LastName', age: 18, city: 'city', phoneNumber:'123', email: 'email', companyName: 'company'}
  const test2 = { id: 2, fname: 'Name2', lname: 'LastName2', age: 18, city: 'city', phoneNumber: '123', email: 'email', companyName: 'company' };
  const test3 = [test, test2];

  renderTable(test3);



  getData(state);
  addListener('confirm_delete_button', 'click', deletePerson.bind(null, state));
  addListener('createModal__content_button-confirm modal__btn', 'click', addNewPerson.bind(null, state));
  addListener('confirm_clear_button', 'click', clearAll.bind(null, state));
  addListener('selectDB', 'change', changeDB.bind(null, state));
  addListener('selectDB', 'change', changeDB.bind(null, state));
  selectedRow(state);

  addListener('login-input', 'input', () => {
    loginValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('password-input', 'input', () => {
    passwordValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('firstName', 'input', () => {
    firstNameValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('lastName', 'input', () => {
    lastNameValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('age', 'input', () => {
    ageValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('city', 'input', () => {
    cityValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('phone', 'input', () => {
    phoneValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('email', 'input', () => {
    emailValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('company', 'input', () => {
    companyValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('login', 'input', () => {
    settingsLoginValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('newLogin', 'input', () => {
    settingsNewLoginValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('newPassword', 'input', () => {
    settingsCurrentPassValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('repeatPassword', 'input', () => {
    settingsRepeatPassValidation.call(null, state);
    validateStatusCheck.call(null, state);
  });
  addListener('img', 'click', showPass.bind(null, 'password', 'img'));
  addListener('img2', 'click', showPass.bind(null, 'newPassword', 'img2'));
  addListener('settingsModal__blockConfirm', 'click', updateAccount);
}

document.addEventListener('DOMContentLoaded', () => {
  languageHandle();
  themeHandler();
  init();
  selectDB();

});
