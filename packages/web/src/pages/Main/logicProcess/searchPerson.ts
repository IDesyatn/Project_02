import { readField } from "../../../ts/utils";

export function searchPerson(state) {
    
    let searchResult = [];
    const searchStr = readField('search');

    if (!searchStr) {
        return false;
    }
    else{
        const data = state.Data;
        data.forEach(element => {
        if (element.firstName.toLowerCase().toString() === searchStr.toLowerCase().toString() 
            || element.lastName.toLowerCase().toString() === searchStr.toLowerCase().toString()) {
            searchResult.push(element);  
        }
    });
    }
    state.SortedData = searchResult; 


}