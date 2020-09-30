'use strigt';

const btnBurger = document.querySelector('.btn-burger'),
    catalog = document.querySelector('.catalog');

const openMenu = () => {
    catalog.classList.add('active');
};

btnBurger.addEventListener('click', openMenu);