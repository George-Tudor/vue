var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        infoLink: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        description: 'A pair of warm, fuzzy socks',
        inStock: false,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
            variantId: 2234,
            variantColor: 'green',
            variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
           },
           {
               variantId: 2235,
               variantColor: 'blue',
               variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
           }
        ],
        sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large"],
        cart: 0,
        onSale: false
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        decreaseCart() {
          this.cart -= 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }

});
Vue.config.devtools = true;
