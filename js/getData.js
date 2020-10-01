const PARAMETERS = {
    cat: 'categoty',
    subcat: 'subcategory'
};

export const getData = {
    url: 'database/dataBase.json',
    get(process) {
        fetch(this.url)
            .then((response) => response.json())
            .then(process);
    },
    wishlist(list, callback) {
        this.get((data) => {
            const result = data.filter((item) => list.includes(item.id));
            callback(result);
        });
    },
    item(value, callback) {
        this.get((data) => {
            const result = data.find((item) => item.id === value);
            callback(result);
        });
    },
    cart(list, callback) {
        this.get((data) => {
            const result = data.filter((item) => list.some(obj => obj.id === item.id));
            callback(result);
        });
    },
    categoty(prop, value, callback) {
        this.get((data) => {
            const result = data.filter((item) => item[PARAMETERS[prop]].toLowerCase() === value.toLowerCase());
            callback(result);
        });
    }
};