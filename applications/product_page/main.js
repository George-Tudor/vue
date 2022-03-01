var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        selectedVariant: 0,
        infoLink: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        description: 'A pair of warm, fuzzy socks',
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
            variantId: 2234,
            variantColor: 'green',
            variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
            variantQuantity: 10
           },
           {
               variantId: 2235,
               variantColor: 'blue',
               variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
               variantQuantity: 0
           }
        ],
        sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large"],
        cart: 0,
        onSale: true
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        decreaseCart() {
          this.cart -= 1
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
        sale() {
            if(this.onSale) {
                return this.brand + ' ' + this.product + ' are on sale!'
            } else {
                return this.brand + ' ' + this.product + ' are not on sale'
            }
        }
    }

});
Vue.config.devtools = true;
