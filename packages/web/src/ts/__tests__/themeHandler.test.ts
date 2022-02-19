import { setTheme, themeHandler } from '../themeHandler'


describe('themeHandler', function () {
  test('should be defined', function () {
    expect(themeHandler).toBeDefined();
  })
  test('themeHandler should be function', function () {
    expect(typeof themeHandler).toBe('function');
  })
})

describe('setTheme', function () {
  test('should be defined', function () {
    expect(setTheme).toBeDefined();
  })
  test('setTheme should be function', function () {
    expect(typeof setTheme).toBe('function');
  })
  test('setTheme should set dark theme', function () {
    const div = document.createElement('div');
    const option = document.createElement('option');
    const darkThemeClass = 'theme-dark';
    if (option.value === 'theme-dark') {
      setTheme(div, option.value)
      expect(div.classList.contains(`general ${darkThemeClass}`)).toBe(true);
    }
  })
  test('setTheme should set light theme', function () {
    const div = document.createElement('div');
    const option = document.createElement('option');
    const lightThemeClass = 'theme-light';
    if (option.value === 'theme-light') {
      setTheme(div, option.value)
      expect(div.classList.contains(`general ${lightThemeClass}`)).toBe(true);
    }
  })
})
