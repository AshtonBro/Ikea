'use strigt';

//? Get elements
const btnBurger = document.querySelector('.btn-burger'),
    btnClose = document.querySelector('.btn-close'),
    btnReturn = document.querySelector('.btn-return'),
    catalog = document.querySelector('.catalog'),
    catalogList = document.querySelector('.catalog-list'),
    catalogSub = document.querySelector('.subcatalog'),
    catalogSubHeader = document.querySelector('.subcatalog-header');

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay);


//? Add new class for element
const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
};

//? Remove new class for element
const closeMenu = () => {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    closeSubMenu();
};

//? Open submenu
const openSubMenu = (event) => {
    event.preventDefault();
    const target = event.target;
    const itemList = target.closest('.catalog-list__item');
    if (itemList) {
        catalogSubHeader.innerHTML = itemList.innerHTML;
        catalogSub.classList.add('subopen');
    }
};

//? Close submenu
const closeSubMenu = (event) => {
    catalogSub.classList.remove('subopen');
}

//? EventListeners
btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);


document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        closeMenu();
    }
});