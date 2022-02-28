var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        infoLink: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        description: 'A pair of warm, fuzzy socks',
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
            variantId: 2234,
            variantColor: "green"
           },
           {
               variantId: 2235,
               variantColor: "blue"
           }
        ],
        sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large"]
            // onSale: true
    }

});
Vue.config.devtools = true;
