const userData = {
    wishListData: ['idd005', 'idd080', 'idd045', 'idd475', 'idd012'],
    get wishList() {
        return this.wishListData;
    },
    set wishList(id) {
        if (this.wishListData.includes(id)) {
            const index = this.wishListData.indexOf(id);
            this.wishListData.splice(index, 1);
        }
        this.wishListData.push(id);
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