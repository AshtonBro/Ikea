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

    if (location.search) {
        const search = decodeURI(location.search);
        console.log('search: ', search);
        const prop = search.split('=')[0].slice(1);
        console.log('prop: ', prop);
        const value = search.split('=')[1];
        console.log('value: ', value);

        if (prop === 's') {
            console.log(value);
        } else if (prop === 'wishlist') {
            getData.wishlist(wishlist, (data) => console.log(`wishlist: ${data}`));
        } else {
            console.log(prop, wishlist);

        }
    }

    if (location.hash) {
        console.log('location.hash: ', location.hash.slice(1));

    }

    if (location.pathname.includes('cart')) {
        console.log(cartList);
    }

};