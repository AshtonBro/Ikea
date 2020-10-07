import {
    getData
} from './getData.js';
import userData from './userData.js';

const genetateCartPage = () => {

    if (location.pathname.includes('cart')) {
        const cartList = document.querySelector('.cart-list');

        cartList.textContent = '';
        getData.cart(userData.cartList, (data) => {
            data.forEach(item => {

                const {
                    name: itemName,
                    description,
                    id,
                    img,
                    price,
                    count,
                } = item;

                let options = '';

                let countUser = userData.cartList.find(item => item.id === id).count;

                if (countUser > count) {
                    countUser = count;
                }

                for (let i = 0; i <= count; i++) {
                    options += `<option value=${i} ${countUser === i ? 'selected' : ''}>${i}</option>`;
                }

                cartList.insertAdjacentHTML('beforeend', `
                    <li class="cart-item">
                    <div class="product">
                        <div class="product__image-container">
                            <img src="${img[0]}"
                                alt="${itemName} - ${description}">
                        </div>
                        <div class="product__description">
                            <h3 class="product__name">
                                <a href="card.html#${id}">${itemName}</a></h3>
                            <p class="product_description-text">${description}</p>
                        </div>
                        <div class="product__prices">
                            <div class="product__price-type product__price-type-regular">
                                <div>
                                <div class="product__total product__total-regular">${price*countUser}.-</div>
                                ${ countUser > 1 ? `<div class="product__price-regular">${price}.-</div>` : `` }
                                </div>
                            </div>
                        </div>
                        <div class="product__controls">

                            <div class="product-controls__remove">
                                <button type="button" class="btn btn-remove">
                                    <img src="image/remove-thin-24.16c1cc7a.svg" alt="Удалить товар">
                                </button>
                            </div>
                            <div class="product-controls__quantity">
                                <select title="Выберите количество" aria-label="Выберите количество">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </li>
                `);
            });
        });
    }
};

export default genetateCartPage;