import {
    getData
} from "./getData.js";

const generateItemPage = () => {

    const renderCard = (data) => {

        const {
            category,
            count,
            description,
            id,
            img,
            name,
            price,
            subcategory
        } = data;

        const goodItemNew = document.querySelector('good-item__new'),
            goodItemHeader = document.querySelector('good-item__header'),
            goodItemDescription = document.querySelector('good-item__description'),
            goodItemEmpty = document.querySelector('good-item__empty'),
            goodItemPriceValue = document.querySelector('good-item__price-value'),
            btnGood = document.querySelector('btn-good'),
            btnAddWishlist = document.querySelector(' btn-add-wishlist');

    };

    if (location.hash && location.pathname.includes('card')) {
        getData.item(location.hash.slice(1), renderCard);
    }

};

export default generateItemPage;