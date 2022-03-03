Vue.component('product-review', {
    template: `
        <input v-model="name" >
    `,
    data() {
        return {
            name: null
        }
    }
})

Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
    `
})

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="product">

            <div class="product-image">
                <img v-bind:src="image" alt="sock-image">
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <span v-if="onSale">On Sale!</span>
                <p>{{ description }}</p>
                <a :href="infoLink" target="_blank">More products like this</a>
                <p v-if="inStock">In Stock</p>
                <p v-else :class="{ noStock: !inStock }">Out of Stock</p>
                <p>{{ sale }}</p>
                <p>Shipping: {{ shipping }}</p>
                
                <product-details :details="details"></product-details>

                <h4>Sizes</h4>

                <ul>
                    <li v-for="size in sizes">{{ size }}</li>
                </ul>

                <div v-for="(variant, index) in variants"
                    :key="variant.variantId"
                    class="color-box"
                    :style="{ backgroundColor: variant.variantColor}"
                     @mouseover="updateProduct(index)">
                </div>

                <button @click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to Cart</button>
                <button @click="decreaseCart" :disabled="!inStock" :class="{ disabledButton: !inStock}">Decrease Qty</button>
            </div>
            
            <product-review></product-review>

        </div>
    `,
    data() {
        return {
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
            onSale: true
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        decreaseCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
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
        },
        shipping() {
            if(this.premium) {
                return "Free"
            }
            return 2.99
        }
    }

})

var app = new Vue({
    el: '#app',
    data: {
        premium: false,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        reduceCartQty(id) {
            for(var i = this.cart.length - 1; i >= 0; i--) {
                if (this.cart[i] === id) {
                    this.cart.splice(i, 1);
                }
            }
        }
    }
});
Vue.config.devtools = true;
