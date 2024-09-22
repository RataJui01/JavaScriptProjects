const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-btn');
const modal = document.querySelector('.Modal-overlay');

openModal.addEventListener('click', () => {
    modal.classList.add('show-modal');
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('show-modal');
})