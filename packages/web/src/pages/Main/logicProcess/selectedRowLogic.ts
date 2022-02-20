export function selectedRow(state) {


    const table: any = document.getElementById('table');
    let index;
  
    for (let i = 1; i < table.rows.length; i++) {
  
      table.rows[i].onclick = function () {
        if (typeof index !== 'undefined') {
          table.rows[index].classList.toggle('selectedRow');
  
        }
  
        index = this.rowIndex;
        this.classList.toggle('selectedRow');
        state.SelectedId = table.rows[index].id;
  
        console.log(state.SelectedId);
  
        const fNameInput = document.getElementById('firstName') as HTMLInputElement;
        const lNameInput = document.getElementById('lastName') as HTMLInputElement;
        const ageInput = document.getElementById('age') as HTMLInputElement;
        const cityInput = document.getElementById('city') as HTMLInputElement;
        const phoneInput = document.getElementById('phone') as HTMLInputElement;
        const emailInput = document.getElementById('email') as HTMLInputElement;
        const companyInput = document.getElementById('company') as HTMLInputElement;
  
        const targetTr = table.rows[index].closest('tr')
  
          if (targetTr) {
  
            const dataFirstName = targetTr.querySelector('.td-firstName');
            const dataLastName = targetTr.querySelector('.td-lastName');
            const dataAge = targetTr.querySelector('.td-age');
            const dataCity = targetTr.querySelector('.td-city');
            const dataPhoneNumber = targetTr.querySelector('.td-phoneNumber');
            const dataEmail = targetTr.querySelector('.td-email');
            const dataCompanyName = targetTr.querySelector('.td-companyName');
  
            fNameInput.value = dataFirstName.textContent;
            lNameInput.value = dataLastName.textContent;
            ageInput.value = dataAge.textContent;
            cityInput.value = dataCity.textContent;
            phoneInput.value = dataPhoneNumber.textContent;
            emailInput.value = dataEmail.textContent;
            companyInput.value = dataCompanyName.textContent;
  
            state.SelectedObj = {
              firstName: fNameInput.value,
              lastName: lNameInput.value,
              age: +ageInput.value,
              city: cityInput.value,
              phone: phoneInput.value,
              email: emailInput.value,
              company: companyInput.value
            }
          }
      }
    }
  }
  
  export function pasteIntoCreateUpdateModal(state) {
    const fNameInput = document.getElementById('firstName') as HTMLInputElement;
    const lNameInput = document.getElementById('lastName') as HTMLInputElement;
    const ageInput = document.getElementById('age') as HTMLInputElement;
    const cityInput = document.getElementById('city') as HTMLInputElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const companyInput = document.getElementById('company') as HTMLInputElement;
  
    if(state.selectedModal ==='update'){
      fNameInput.value = state.SelectedObj.firstName;
      lNameInput.value = state.SelectedObj.lastName;
      ageInput.value = state.SelectedObj.age;
      cityInput.value = state.SelectedObj.city;
      phoneInput.value = state.SelectedObj.phone;
      emailInput.value = state.SelectedObj.email;
      companyInput.value = state.SelectedObj.company;
  }
    else{
      fNameInput.value = '';
      lNameInput.value = '';
      ageInput.value = '';
      cityInput.value = '';
      phoneInput.value = '';
      emailInput.value = '';
      companyInput.value = '';
    }
  }