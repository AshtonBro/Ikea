const userData = {
    wishListData: [],
    get wishList() {
        return this.wishListData;
    },
    set wishList(id) {
        if (this.wishListData.includes(id)) {
            const index = this.wishListData.indexOf(id);
            this.wishListData.splice(index, 1);
        } else {
            this.wishListData.push(id);
        }
    },

    cartListData: [{
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
        }
    ],

};

export default userData;