export function openAndClose(modalId) {
    const modalActive = document.getElementById(modalId);
    const closeModal = modalActive.querySelector('.modal__close');
    const modalArea = modalActive.querySelector('.modal__area');
    const btnCancel = modalActive.querySelector('.modal__close-btn');

    modalActive.classList.add('active');
    if (closeModal) {
      closeModal.addEventListener('click', () => {
        modalActive.classList.remove('active');
      });
    }

    if (modalArea) {
      modalArea.addEventListener('click', () => {
        modalActive.classList.remove('active');
      });
    }

    if (btnCancel) {
      btnCancel.addEventListener('click', () => {
        modalActive.classList.remove('active');
      });
    }
}

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

 export function setTheme(rootElement, theme) {
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
    }
  }

export function selectedRow() {
  const table: any = document.getElementById("table");
  let index;

  for (let i = 1; i < table.rows.length; i++) {

    table.rows[i].onclick = function() {

      if (typeof index !== "undefined") {
        table.rows[index].classList.toggle("selectedRow");
      }

      index = this.rowIndex;
      this.classList.toggle("selectedRow");
    };
  }
}