import {
    getData
} from './getData.js';


const wishlist = ['idd005', 'idd080', 'idd045', 'idd475', 'idd012'];

const generateGoods = () => {

    const mainHeader = document.querySelector('.main-header');
    const goodsList = document.querySelector('.goods-list');

    if (location.pathname.includes('goods') && location.search) {
        const search = decodeURI(location.search);
        const prop = search.split('=')[0].slice(1);
        const value = search.split('=')[1];

        if (prop === 'search') {
            getData.search(value, (data) => console.log(data));
            mainHeader.textContent = `Поиск: ${value}`;
        } else if (prop === 'wishlist') {
            getData.wishlist(wishlist, (data) => console.dir({
                wishlist: data
            }));
            mainHeader.textContent = `Список желаний`;
        } else if (prop === 'cat' || prop === 'subcat') {
            getData.categoty(prop, value, (data) => console.log(data));
            mainHeader.textContent = value;
        }

    }
};

export default generateGoods;