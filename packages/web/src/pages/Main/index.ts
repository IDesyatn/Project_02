import './style.scss';
import { languageHandle } from '../../ts/localization';
import { themeHandler, openAndClose, selectedRow, selectDB } from './logic';
import { doc } from 'prettier';

document.addEventListener('DOMContentLoaded', () => {
  languageHandle();
  themeHandler();
  selectedRow();
  selectDB();

});


const openModal = document.querySelectorAll('.modal__open');

openModal.forEach(function(button) {
  button.addEventListener('click', (event) => {

    // @ts-ignore
    const modalTarget = <HTMLButtonElement>event.target.dataset.modal;
    openAndClose(modalTarget);
  });
});

