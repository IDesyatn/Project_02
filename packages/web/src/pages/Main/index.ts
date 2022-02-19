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
import { updatePerson } from './logicProcess/updatePerson';
import {sortTable} from './logicProcess/addData'

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
    selectedModal: null
  };


  //тестовое, при работе сервака, удалить 
  const test = { id: 4, firstName: 'ZName', lastName: 'LastName', age: 23, city: 'city', phoneNumber:'123', email: 'email', company: 'company'}
  const test2 = { id: 2, firstName: 'Name2', lastName: 'LastName2', age: 18, city: 'Zity', phoneNumber: '123', email: 'email', company: 'company' };
  state.Data = [test, test2];
  renderTable(state.Data);
  //

  selectedRow(state);
  getData(state);


  addListener('create', 'click', () => {
    state.selectedModal = 'create'; 
  });

 addListener('update', 'click', () => {
    state.selectedModal = 'update'; 
  });

  addListener('confirm_delete_button', 'click', deletePerson.bind(null, state));
  addListener('createModal__content_button-confirm modal__btn', 'click', () => {
    if (state.selectedModal === 'create') {
      addNewPerson(state);
    } 
    else {
      updatePerson(state);
    } 
  });

  addListener('confirm_clear_button', 'click', clearAll.bind(null, state));
  addListener('selectDB', 'change', changeDB.bind(null, state));
  

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

  addListener('filter-radio-0', 'input', sortTable.bind(null, state, 'id'));
  addListener('filter-radio-1', 'input', sortTable.bind(null, state, 'firstName'));
  addListener('filter-radio-2', 'input', sortTable.bind(null, state, 'lastName'));
  addListener('filter-radio-3', 'input', sortTable.bind(null, state, 'age'));
  addListener('filter-radio-4', 'input', sortTable.bind(null, state, 'city'));
  addListener('filter-radio-5', 'input', sortTable.bind(null, state, 'phoneNumber'));
  addListener('filter-radio-6', 'input', sortTable.bind(null, state, 'email'));
  addListener('filter-radio-7', 'input', sortTable.bind(null, state, 'company'));
}

document.addEventListener('DOMContentLoaded', () => {
  languageHandle();
  themeHandler();
  init();
  selectDB();
});
