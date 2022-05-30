let initialState = {
    products: [
        {
            category: 'food',
            name: 'mansaf',
            url: 'https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/03/jordanian-mansaf.jpg',
            description: 'Jordainan food',
            price: 2.50,
            InStock: 100,
            selected: false
        },
        {
            category: 'food',
            name: 'Pasta',
            url: 'https://cdn.alweb.com/thumbs/atbaqalpasta/article/fit727x484/%D9%88%D8%B5%D9%81%D8%A7%D8%AA-%D8%B3%D9%87%D9%84%D8%A9-%D9%84%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D9%85%D8%B9%D9%83%D8%B1%D9%88%D9%86%D8%A9-%D8%A8%D8%A7%D9%84%D8%B5%D9%84%D8%B5%D8%A9-%D8%A7%D9%84%D8%AD%D9%85%D8%B1%D8%A7%D8%A1.jpg',
            description: 'Italian food',
            price: 3.50,
            InStock: 100,
            selected: false

        },
        {
            category: 'food',
            name: 'Hamburger',
            url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
            description: 'American food',
            price: 4.75,
            InStock: 100,
            selected: false
        },
        {
            category: 'food',
            name: 'Baqlawa',
            url: 'https://www.aljamila.com/sites/default/files/styles/1100x732/public/lm_ytm_lsnd_bd-shutterstock_308633843.jpg',
            description: 'Arabic Dessert',
            price: 2.00,
            InStock: 100,
            selected: false

        },
        {
            category: 'electronics',
            name: 'Mouse',
            url: 'https://media.kingston.com/hyperx/promos/hx-family-mouse-pulsefire-raid-lg.jpg',
            description: 'For ease of use',
            price: 60.00,
            InStock: 20,
            selected: false

        },
        {
            category: 'electronics',
            name: 'Monitor',
            url: 'https://cdn.shopify.com/s/files/1/0024/9803/5810/products/500884-Product-0-I-637546895347199355_540x540.jpg?v=1619056849',
            description: 'Display for a computer',
            price: 320.00,
            InStock: 6,
            selected: false

        },
        {
            category: 'electronics',
            name: 'Keyboard',
            url: 'https://images.unsplash.com/photo-1567924675637-283a6742993e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80',
            description: 'Instrument of data entry',
            price: 160.00,
            InStock: 12,
            selected: false

        },
        {
            category: 'electronics',
            name: 'Headset',
            url: 'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL400_.jpg',
            description: 'Computer communications equipment and listening music',
            price: 100.00,
            InStock: 25,
            selected: false

        },
        {
            category: 'electronics',
            name: 'Camera',
            url: 'https://www.fotomecanica.mx/pub/media/catalog/product/cache/243b585d5b053344651ac1ff3b7a4649/c/a/canon_2727c002_eos_rebel_t7_dslr_1461734.jpg',
            description: 'For take images or recoard videos',
            price: 60.00,
            InStock: 25,
            selected: false
        },
    ]
}
let products;

export default function ProductsReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "SELECT_CATEGORY":
            products = state.products.map(product => {
                if (product.category === payload) {
                    product.selected = true;
                } else {
                    product.selected = false;
                }
                return product;
            });
            return { products: products };
        default:
            return state;
    }

}
export const selectCategory = (category) => {
    return {
        type: "SELECT_CATEGORY",
        payload: category
    }
}