import './style.scss';
import { languageHandle } from '../../ts/localization';
import { themeHandler } from '../../ts/themeHandler';
import { openAndClose, selectDB, showPass, updateAccount, userLogout, changeNameModal } from './logic';
import {
  settingsRepeatPassValidation,
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
} from './logicProcess/validation';
import { addListener } from '../../ts/utils';
import { loginValidation, passwordValidation, validateStatusCheck } from '../Login/logic';
import { clearAll } from './logicProcess/clearAll';
import { changeDB } from './logicProcess/changeDB';
import { getData } from './logicProcess/getData';
import { addNewPerson } from './logicProcess/createPerson';

import { renderTable } from './logicProcess/addData';
import { deletePerson } from './logicProcess/deletePerson';
import { updatePerson } from './logicProcess/updatePerson';
import { pasteIntoCreateUpdateModal, selectedRow } from './logicProcess/selectedRowLogic';


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
    SortBy: 'id',
    SortedData: null,
    SelectedId: null,
    SelectedObj: null,
    validateStatus: [false, false],
    selectedModal: null,
  };


  // тестовое, при работе сервака, удалить
  const test = {
    id: 4,
    firstName: 'ZName',
    lastName: 'LastName',
    age: 23,
    city: 'city',
    phoneNumber: '6123',
    email: 'email',
    company: 'Zcompany',
  };
  const test2 = {
    id: 2,
    firstName: 'Name2',
    lastName: 'LastName2',
    age: 18,
    city: 'Zity',
    phoneNumber: '123',
    email: 'Aemail',
    company: 'company',
  };

  state.Data = [test, test2];

  renderTable(state);
  //

  selectedRow(state);
  getData(state);


  // modal create/update
  addListener('create', 'click', () => {
    state.selectedModal = 'create';
    changeNameModal(state)
    pasteIntoCreateUpdateModal(state);
  });

  addListener('update', 'click', () => {
    state.selectedModal = 'update';
    changeNameModal(state);
    pasteIntoCreateUpdateModal(state);

  });

  addListener('createModal__content_button-confirm modal__btn', 'click', () => {
    if (state.selectedModal === 'create') {
      addNewPerson(state);
    } else {
      updatePerson(state);
    }
  });


  // delete/clear
  addListener('confirm_delete_button', 'click', deletePerson.bind(null, state));
  addListener('confirm_clear_button', 'click', clearAll.bind(null, state));

  // select DB
  addListener('selectDB', 'change', changeDB.bind(null, state));


  // validation
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


  // show pass
  addListener('img', 'click', showPass.bind(null, 'password', 'img'));
  addListener('img2', 'click', showPass.bind(null, 'newPassword', 'img2'));
  addListener('settingsModal__blockConfirm', 'click', updateAccount);

  // filter
  addListener('filter-radio-0', 'input', () => {
    state.SortBy = 'id';
    renderTable(state);
  });
  addListener('filter-radio-1', 'input', () => {
    state.SortBy = 'firstName';
    renderTable(state);
  });
  addListener('filter-radio-2', 'input', () => {
    state.SortBy = 'lastName';
    renderTable(state);
  });
  addListener('filter-radio-3', 'input', () => {
    state.SortBy = 'age';
    renderTable(state);
  });
  addListener('filter-radio-4', 'input', () => {
    state.SortBy = 'phoneNumber';
    renderTable(state);
  });
  addListener('filter-radio-5', 'input', () => {
    state.SortBy = 'city';
    renderTable(state);
  });
  addListener('filter-radio-6', 'input', () => {
    state.SortBy = 'email';
    renderTable(state);
  });
  addListener('filter-radio-7', 'input', () => {
    state.SortBy = 'company';
    renderTable(state);
  });

  // search
  addListener('searchButton', 'click', renderTable.bind(null, state));

  // logout
  addListener('logout', 'click', userLogout);
}

document.addEventListener('DOMContentLoaded', () => {
  languageHandle();
  themeHandler();
  init();
  selectDB();

});
