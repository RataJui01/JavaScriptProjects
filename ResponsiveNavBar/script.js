const toggleBtn = document.querySelector('.menu');
const links = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
    links.classList.toggle('active');
})