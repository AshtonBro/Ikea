import {
    getData
} from "./getData.js";

const NEW_COUNT_ITEM = 6;

const generateItemPage = () => {

    const renderCard = (data) => {

        const {
            category,
            count,
            description,
            id,
            img,
            name: itemName,
            price,
            subcategory
        } = data;

        const breadCrumbLink = document.querySelectorAll('.breadcrumb__link'),
            goodImages = document.querySelector('.good-images'),
            goodItemNew = document.querySelector('.good-item__new'),
            goodItemHeader = document.querySelector('.good-item__header'),
            goodItemDescription = document.querySelector('.good-item__description'),
            goodItemEmpty = document.querySelector('.good-item__empty'),
            goodItemPriceValue = document.querySelector('.good-item__price-value'),
            btnGood = document.querySelector('.btn-good'),
            btnAddWishlist = document.querySelector('.btn-add-wishlist');

        breadCrumbLink[0].textContent = category;
        breadCrumbLink[0].href = `goods.html?cat=${category}`;
        breadCrumbLink[1].textContent = subcategory;
        breadCrumbLink[1].href = `goods.html?cat=${subcategory}`;
        breadCrumbLink[2].textContent = itemName;

        goodImages.textContent = '';
        goodItemHeader.textContent = itemName;
        goodItemDescription.textContent = description;
        goodItemPriceValue.textContent = price;
        btnGood.dataset.idd = id;
        btnAddWishlist.dataset.idd = id;

        img.forEach((item) => {
            goodImages.insertAdjacentHTML('afterbegin', `
            <div class="good-image__item">
				<img src="${item}" alt="${itemName} - ${description}">
			</div>
            `);
        });

        if (count >= NEW_COUNT_ITEM) {
            goodItemNew.style.display = 'block';
        } else if (!count) {
            goodItemEmpty.style.display = 'block';
            btnGood.style.display = 'none';
        }

    };

    if (location.hash && location.pathname.includes('card')) {
        getData.item(location.hash.slice(1), renderCard);
    }

};

export default generateItemPage;