import { getData } from "./getData";

export function changeDB(state) {
    state.DB =  ((document.getElementById('selectDB'))as HTMLInputElement).value;
    state.SelectedId = null;
    state.Data = null;
    getData(state);
}