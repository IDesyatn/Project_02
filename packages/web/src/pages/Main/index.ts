import "./style.scss"
import { languageHandle } from '../../ts/localization'
import {themeHandler, openAndClose, selectedRow} from './logic'

document.addEventListener("DOMContentLoaded", () => {
  languageHandle();
  themeHandler();
  selectedRow();
});


 const openModal = document.querySelectorAll('.modal__open');

  openModal.forEach(function(button) {
      button.addEventListener('click', (event) => {
        // @ts-ignore
      const modalTarget = <HTMLButtonElement>event.target.dataset.modal;
      openAndClose(modalTarget);
    });
  });
