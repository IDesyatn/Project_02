import { removeChild } from "../../../ts/utils";

export function getData(state) {
    //removeChild('tbody');
    const url = `main/data`;
    
    fetch(url, {
        method: 'GET', 
        body: state.DB
    })
        
    .then((response: Response) => response.json())
    .then((data) => {
      state.Data = [];
      data.forEach((element) => {
          state.Data.push(element);
          console.log(state.Data)
      });
    // добавить функцию вывода в таблицу
      return true;
    })
    .catch((err)=>{
            return false;
    });
}
