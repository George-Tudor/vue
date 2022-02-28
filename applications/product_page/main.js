var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        infoLink: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        description: 'A pair of warm, fuzzy socks',
        inStock: true,
        onSale: true
    }

});
Vue.config.devtools = true;
