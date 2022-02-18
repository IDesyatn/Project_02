
export function themeHandler() {
  const body = <HTMLElement>document.getElementById('body');
  const selectedTheme = <HTMLInputElement>document.getElementById('select-theme');
  const localStorageTheme = localStorage.getItem('selected-theme') || 'light';

  selectedTheme.value = localStorageTheme;
  setTheme(body, localStorageTheme);

  selectedTheme.addEventListener('change', () => {
    setTheme(body, selectedTheme.value);
  });
}

function setTheme(rootElement, theme) {
  const darkThemeClass = 'theme-dark';
  const lightThemeClass = 'theme-light';
  localStorage.setItem('selected-theme', theme);
  switch (theme) {
    case 'dark':
      rootElement.className = `${darkThemeClass}`;
      break;

    case 'light':
      rootElement.className = `${lightThemeClass}`;
      break;

    default:
      rootElement.className = `${lightThemeClass}`;
  };
}
