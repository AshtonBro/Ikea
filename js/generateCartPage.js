import {
    getData
} from './getData.js';
import userData from './userData.js';

const genetateCartPage = () => {

    if (location.pathname.includes('cart')) {
        getData.cart(userData.cartList, (data) => console.log(data));
    }
};

export default genetateCartPage;