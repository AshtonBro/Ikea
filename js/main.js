'use strigt';


const btnBurger = document.querySelector('.btn-burger'),
    catalog = document.querySelector('.catalog'),
    overlay = document.querySelector('.overlay'),
    btnClose = document.querySelector('.btn-close'),
    catalogList = document.querySelector('.catalog-list'),
    catalogSub = document.querySelector('.subcatalog');

const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
};

const closeMenu = () => {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
};

const openSubMenu = (event) => {
    event.preventDefault();
    const target = event.target.closest('.catalog-list__item');
    if (target) {
        catalogSub.classList.add('subopen');
    }

};

btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalogList.addEventListener('click', openSubMenu);

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        closeMenu();
    }
});