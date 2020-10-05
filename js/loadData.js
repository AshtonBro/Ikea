import {
    getData
} from './getData.js';


const wishlist = ['idd005', 'idd080', 'idd045', 'idd475', 'idd012'];

const cartList = [{
        id: 'idd002',
        count: 3
    },
    {
        id: 'idd022',
        count: 1
    },
    {
        id: 'idd042',
        count: 2
    },
];

export const loadData = () => {

    if (location.hash) {
        getData.item(location.hash.slice(1), (data) => console.log(data));
    }

    if (location.pathname.includes('cart')) {
        getData.cart(cartList, (data) => console.log(data));
    }

    //getData.catalog((data) => console.log(data));
    // getData.subCatalog("Декор", (data) => console.log(data));
};