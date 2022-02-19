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
  settingsCurrentPassValidation,
  settingsRepeatPassValidation,
  showPass,
} from './logic';
import { addListener } from '../../ts/utils';
import { loginValidation, passwordValidation, validateStatusCheck } from '../Login/logic';
import { clearAll } from './logicProcess/clearAll';

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
    SelectedNode: null,
    SelectedId: null,
    SelectedObj: null,
    validateStatus: [false, false],
  };

  addListener('saveClear', 'click', clearAll.bind(null, state));

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
  addListener('newLogin', 'input', () => {
    settingsLoginValidation.call(null, state);
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
  addListener('img', 'click', showPass.bind(null, 'newPassword', 'img'));
  addListener('img2', 'click', showPass.bind(null, 'repeatPassword', 'img2'));
}

document.addEventListener('DOMContentLoaded', () => {
  languageHandle();
  themeHandler();
  selectedRow();
  init();
  selectDB();
});
