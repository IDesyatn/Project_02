import { getElementById, getInputValue, setInnerText } from '../../../ts/utils';

export function firstNameValidation(state) {
    const input = document.getElementById('firstName');
    const validationRegex = /^[а-яА-Яa-zA-Z]+$/;
    const value = <string>getInputValue('firstName');
    const messageId = 'firstName-message';
  
    if (value === '') {
      setInnerText(messageId, 'Field can`t be empty');
      state.validateStatus[1] = false;
      input.classList.add('invalid');
      return false;
    }
  
    if (value.length > 50) {
      setInnerText(messageId, 'First name no more than 50 characters');
      state.validateStatus[1] = false;
      input.classList.add('invalid');
      return false;
    }
  
    if (!value.match(validationRegex)) {
      setInnerText(messageId, 'First name must contain only letters');
      state.validateStatus[1] = false;
      input.classList.add('invalid');
      return false;
    }
  
    setInnerText(messageId, '');
    state.validateStatus[1] = true;
    input.classList.remove('invalid');
    return true;
  }
  
  export function lastNameValidation(state) {
    const input = document.getElementById('lastName');
    const validationRegex = /^[а-яА-Яa-zA-Z]+$/;
    const value = <string>getInputValue('lastName');
    const messageId = 'lastName-message';
  
    if (value === '') {
      setInnerText(messageId, 'Field can`t be empty');
      state.validateStatus[1] = false;
      input.classList.add('invalid');
      return false;
    }
  
    if (value.length > 50) {
      setInnerText(messageId, 'Last name no more than 50 characters');
      state.validateStatus[1] = false;
      input.classList.add('invalid');
      return false;
    }
  
    if (!value.match(validationRegex)) {
      setInnerText(messageId, 'Last name must contain only letters');
      state.validateStatus[1] = false;
      input.classList.add('invalid');
      return false;
    }
  
    setInnerText(messageId, '');
    state.validateStatus[1] = true;
    input.classList.remove('invalid');
    return true;
  }
  
  export function ageValidation(state) {
    const input = document.getElementById('age');
    const validationRegex = /^[0-9]+$/;
    const value = <string>getInputValue('age');
    const messageId = 'age-message';
  
    if (value.length > 0 && !value.match(validationRegex)) {
      setInnerText(messageId, 'Age must contain only numbers');
      state.validateStatus[1] = false;
      input.classList.add('invalid');
      return false;
    }
  
    if (value.length > 3) {
      setInnerText(messageId, 'Age no more than 3 characters');
      state.validateStatus[1] = false;
      input.classList.add('invalid');
      return false;
    }
  
    if (value.length < 2 && value.length > 0) {
      setInnerText(messageId, 'Age no less than 2 characters');
      state.validateStatus[1] = false;
      input.classList.add('invalid');
      return false;
    }
  
    setInnerText(messageId, '');
    state.validateStatus[1] = true;
    input.classList.remove('invalid');
    return true;
  }
  
  export function cityValidation(state) {
    const input = document.getElementById('city');
    const validationRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    const value = <string>getInputValue('city');
    const messageId = 'city-message';
  
    if (value.length > 0 && !value.match(validationRegex)) {
      setInnerText(messageId, 'Invalid input format');
      state.validateStatus[1] = false;
      input.classList.add('invalid');
      return false;
    }
  
    if (value.length > 50) {
      setInnerText(messageId, 'City no more than 50 characters');
      state.validateStatus[1] = false;
      input.classList.add('invalid');
      return false;
    }
  
    setInnerText(messageId, '');
    state.validateStatus[1] = true;
    input.classList.remove('invalid');
    return true;
  }
  
  export function phoneValidation(state) {
    const input = document.getElementById('phone');
    const validationRegex =
      /((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/;
    const value = <string>getInputValue('phone');
    const messageId = 'phone-message';
  
    if (value === '') {
  
    }
  
    if (value.length > 0 && !value.match(validationRegex)) {
      setInnerText(messageId, 'Invalid input format');
      state.validateStatus[1] = false;
      input.classList.add('invalid');
      return false;
    }
  
    setInnerText(messageId, '');
    state.validateStatus[1] = true;
    input.classList.remove('invalid');
    return true;
  }
  
  export function emailValidation(state) {
    const input = document.getElementById('email');
    const validationRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const value = <string>getInputValue('email');
    const messageId = 'email-message';
  
    if (value.length > 0 && !value.match(validationRegex)) {
      setInnerText(messageId, 'Invalid input format');
      state.validateStatus[1] = false;
      input.classList.add('invalid');
      return false;
    }
  
    setInnerText(messageId, '');
    state.validateStatus[1] = true;
    input.classList.remove('invalid');
    return true;
  }
  
  export function companyValidation(state) {
    const input = document.getElementById('company');
    const value = <string>getInputValue('company');
    const messageId = 'company-message';
  
    if (value.length > 50) {
      setInnerText(messageId, 'Company name no more than 50 characters');
      state.validateStatus[1] = false;
      input.classList.add('invalid');
      return false;
    }
  
    setInnerText(messageId, '');
    state.validateStatus[1] = true;
    input.classList.remove('invalid');
    return true;
  }
  
  export function settingsLoginValidation(state) {
    const loginRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const value = <string>getInputValue('login');
    const loginInput = document.getElementById('login');
    const loginId = 'setting-login-message';
  
    if (value === '') {
      setInnerText(loginId, 'Field can`t be empty');
      state.validateStatus[0] = false;
      loginInput.classList.add('invalid');
      return false;
    }
  
    if (value.length < 6) {
      setInnerText(loginId, 'Login at least 6 characters');
      state.validateStatus[0] = false;
      loginInput.classList.add('invalid');
      return false;
    }
  
    if (value.length > 20) {
      setInnerText(loginId, 'Login can`t be longer than 20 characters');
      state.validateStatus[0] = false;
      loginInput.classList.add('invalid');
      return false;
    }
  
    if (!value.match(loginRegex)) {
      setInnerText(loginId, 'Login must contain only letters, numbers, and underscores');
      state.validateStatus[0] = false;
      loginInput.classList.add('invalid');
      return false;
    }
  
    setInnerText(loginId, '');
    state.validateStatus[0] = true;
    loginInput.classList.remove('invalid');
    return true;
  }
  
  export function settingsNewLoginValidation(state) {
    const loginRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const value = <string>getInputValue('newLogin');
    const loginInput = document.getElementById('newLogin');
    const loginId = 'setting-newLogin-message';
  
    if (value === '') {
      setInnerText(loginId, 'Field can`t be empty');
      state.validateStatus[0] = false;
      loginInput.classList.add('invalid');
      return false;
    }
  
    if (value.length < 6) {
      setInnerText(loginId, 'Login at least 6 characters');
      state.validateStatus[0] = false;
      loginInput.classList.add('invalid');
      return false;
    }
  
    if (value.length > 20) {
      setInnerText(loginId, 'Login can`t be longer than 20 characters');
      state.validateStatus[0] = false;
      loginInput.classList.add('invalid');
      return false;
    }
  
    if (!value.match(loginRegex)) {
      setInnerText(loginId, 'Login must contain only letters, numbers, and underscores');
      state.validateStatus[0] = false;
      loginInput.classList.add('invalid');
      return false;
    }
  
    setInnerText(loginId, '');
    state.validateStatus[0] = true;
    loginInput.classList.remove('invalid');
    return true;
  }
  
  export function settingsCurrentPassValidation(state) {
    const loginRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const value = <string>getInputValue('newPassword');
    const loginInput = document.getElementById('newPassword');
    const loginId = 'setting-newPassword-message';
  
    if (value === '') {
      setInnerText(loginId, 'Field can`t be empty');
      state.validateStatus[0] = false;
      loginInput.classList.add('invalid');
      return false;
    }
  
    if (value.length < 6) {
      setInnerText(loginId, 'Login at least 6 characters');
      state.validateStatus[0] = false;
      loginInput.classList.add('invalid');
      return false;
    }
  
    if (value.length > 20) {
      setInnerText(loginId, 'Login can`t be longer than 20 characters');
      state.validateStatus[0] = false;
      loginInput.classList.add('invalid');
      return false;
    }
  
    if (!value.match(loginRegex)) {
      setInnerText(loginId, 'Login must contain only letters, numbers, and underscores');
      state.validateStatus[0] = false;
      loginInput.classList.add('invalid');
      return false;
    }
  
    setInnerText(loginId, '');
    state.validateStatus[0] = true;
    loginInput.classList.remove('invalid');
    return true;
  }
  
  export function settingsRepeatPassValidation(state) {
    const loginRegex = /^[a-zA-Z0-9_]{3,20}$/;
    const value = <string>getInputValue('repeatPassword');
    const loginInput = document.getElementById('repeatPassword');
    const loginId = 'setting-repeatPassword-message';
  
    if (value === '') {
      setInnerText(loginId, 'Field can`t be empty');
      state.validateStatus[0] = false;
      loginInput.classList.add('invalid');
      return false;
    }
  
    if (value.length < 6) {
      setInnerText(loginId, 'Login at least 6 characters');
      state.validateStatus[0] = false;
      loginInput.classList.add('invalid');
      return false;
    }
  
    if (value.length > 20) {
      setInnerText(loginId, 'Login can`t be longer than 20 characters');
      state.validateStatus[0] = false;
      loginInput.classList.add('invalid');
      return false;
    }
  
    if (!value.match(loginRegex)) {
      setInnerText(loginId, 'Login must contain only letters, numbers, and underscores');
      state.validateStatus[0] = false;
      loginInput.classList.add('invalid');
      return false;
    }
  
    setInnerText(loginId, '');
    state.validateStatus[0] = true;
    loginInput.classList.remove('invalid');
    return true;
  }