'use strict';

//This time we are storing the different elements from the DOM in variables so we can use them many times.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const showModalBtns = document.querySelectorAll('.show-modal');
let showModal = false;

const hideModal = function () {
    if (showModal) {
        showModal = false;
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
};

const openModal = function () {
    if (!showModal) {
        showModal = true;
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
};

showModalBtns.forEach(button => {
    button.addEventListener('click', openModal);
});

closeModalBtn.addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        hideModal();
    }
});
