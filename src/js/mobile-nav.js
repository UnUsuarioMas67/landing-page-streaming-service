const navBar = document.querySelector('nav');
const burgerBtn = document.querySelector('#burger-btn');
const closeBtn = document.querySelector('#close-btn');

burgerBtn.onclick = () => navBar.classList.add('active');
closeBtn.onclick = () => navBar.classList.remove('active');
