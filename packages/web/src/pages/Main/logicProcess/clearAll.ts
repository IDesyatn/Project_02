import { removeChild } from "../../../ts/utils";

export function clearAll(state) {
  console.log('clearAll');
    const url = `main/data`;
    const data = {'db':state.DB, 'truncate': true}
    fetch(url, {
        method: 'DELETE', 
        body: JSON.stringify(data),
    })
    .then((response) => {        
      state.currentData = null;
      removeChild('tbody');
      return true;
    })
    .catch(() => {
      return false;
    });
}
 
