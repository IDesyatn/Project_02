export function languageHandle () {
  const selectedLanguage: HTMLElement = document.getElementById('select-language');
  const translateElements: any = document.querySelectorAll<HTMLElement>('[data-translate]');
  const placeholderElements: any = document.querySelectorAll<HTMLElement>('[data-placeholder]');

  const ruTranslations = {
    firstName: `Имя`,
    lastName: 'Фамилия',
    age: 'Возраст',
    city: 'Город',
    phone: 'Телефон',
    email: 'Електронная почта',
    company: 'Компания',
    create: 'Создать',
    update: 'Изменить',
    clearAll: 'Очистить все',
    english: 'Англ',
    russian: 'Рус',
    light: 'Светлая',
    dark: 'Тёмная',
    settings: 'Настройки',
    settingsM: 'НАСТРОЙКИ',
    login: 'Логин',
    newLogin: 'Новый логин',
    loginUC: 'ЛОГИН',
    logout: 'Выйти',
    confirm: 'Подтвердить',
    searchFName: "Поиск: по имени или фамилии",
    searchFirstName: 'введите имя или фамилию...',
    cancel: 'Отменить',
    delete: 'Удалить',
    currentPassword: 'Текущий пароль',
    newPassword: 'Новый пароль',
    passwordUC: 'ПАРОЛЬ',
    password: 'Пароль',
    yes: 'ДА',
    no: 'НЕТ',
    doYouWant: 'Вы хотите удалить выделеную строку таблицы?',
    account: 'У вас уже есть аккаунт?',
    signIn: 'Вход',
    username: 'Имя пользователя',
    needAccount: 'Нужен аккаунт?',
    logIn: 'ВХОД',
    registration: 'Регистрация',
    confPas: 'Подтверждение пароля',
    fieldEmpty:'Поле не может быть пустым',
    loginLength: 'Логин не менее 6 символов',
  };
  const enTranslations = {
    firstName: 'First name',
    lastName: 'Last name',
    age: 'Age',
    city: 'City',
    phone: 'Phone',
    email: 'Email',
    company: 'Company',
    create: 'Create',
    update: 'Update',
    delete: 'DELETE',
    clearAll: 'Clear All',
    english: 'Eng',
    russian: 'Rus',
    light: 'Light',
    dark: 'Dark',
    settings: 'Settings',
    settingsM: 'SETTINGS',
    logout: 'Logout',
    confirm: 'CONFIRM',
    cancel: 'CANCEL',
    login: 'Login',
    newLogin: 'New login',
    loginUC: 'LOGIN',
    currentPassword: 'Current password',
    newPassword: 'New password',
    passwordUC: 'PASSWORD',
    password: 'Password',
    searchFName: "Search: First or Last name",
    searchFirstName: 'enter first or last name...',
    yes: 'YES',
    no: 'NO',
    doYouWant: 'Do you want to delete the selected row in the table?',
    account: 'Already have an account?',
    signIn: 'Sign in',
    username: 'Username',
    needAccount: 'Need an account?',
    logIn: 'LOG IN',
    registration: 'Registration',
    confPas: 'CONFIRM PASSWORD',
    fieldEmpty:'Field can`t be empty',
    loginLength: 'Login at least 6 characters',
    loginLen: 'Login can`t be longer than 20 characters',
    loginValid: 'Login must contain only letters, numbers, and underscores'
  };

  const localStorageLanguage: string = localStorage.getItem('selected-language') || 'english';
  // @ts-ignore
  selectedLanguage.value = localStorageLanguage;
  setLanguage(localStorageLanguage);

  selectedLanguage.addEventListener('change', (event) => {
    // @ts-ignore
    setLanguage(selectedLanguage.value);
  })

  function setLanguage(lang) {
    let translation = getTranslation(lang);
    localStorage.setItem('selected-language', lang);

    translateElements.forEach((el) => {
      const translateKey = el.dataset.translate;
      el.textContent = translation[translateKey];
    });
    placeholderElements.forEach((el) => {
      const placeholderKey = el.dataset.placeholder;
      el.placeholder =  translation[placeholderKey];
    })
  }

function getTranslation(lang) {
    switch (lang) {
      case 'russian':
        return ruTranslations;
      case 'english':
        return enTranslations;
      default:
        return enTranslations;
    }
  }
}
