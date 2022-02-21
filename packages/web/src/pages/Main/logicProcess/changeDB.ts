import { getData } from './getData';

export function changeDB(state) {
  const db = ((document.getElementById('selectDB')) as HTMLInputElement).value;
  state.DB = db;
  window.localStorage.setItem('selectDB', db);
  state.SelectedId = null;
  state.Data = null;
  getData(state);
}
