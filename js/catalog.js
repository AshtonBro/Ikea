export const runCatalog = () => {
    //? Get elements
    const btnBurger = document.querySelector('.btn-burger'),
        btnReturn = document.querySelector('.btn-return'),
        catalog = document.querySelector('.catalog'),
        catalogSub = document.querySelector('.subcatalog'),
        catalogSubHeader = document.querySelector('.subcatalog-header');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.append(overlay);


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
    const handlerCatalog = (event) => {
        event.preventDefault();
        const itemList = event.target.closest('.catalog-list__item');
        if (itemList) {
            catalogSubHeader.innerHTML = itemList.innerHTML;
            catalogSub.classList.add('subopen');
        }

        if (event.target.classList.contains('btn-close')) {
            closeMenu();
        }
    };

    //? Close submenu
    const closeSubMenu = () => {
        catalogSub.classList.remove('subopen');
    };

    //? EventListeners
    btnBurger.addEventListener('click', openMenu);
    overlay.addEventListener('click', closeMenu);
    catalog.addEventListener('click', handlerCatalog);
    btnReturn.addEventListener('click', closeSubMenu);


    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            closeMenu();
        }
    });
};