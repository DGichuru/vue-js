vue.component('products', {
    template:`
    <div class = "product"> 
            <div class = "product-image">
                <img v-bind:src="image">
            </div> 
            
            <div class = "product-info">
                <h1>{{ product }}</h1>  
                <p v-if="inStock"> In Stock</p>
                <p v-else>Out of Stock</p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div class = "color-box"
                     v-for="variant in variants" 
                     :key="variant.variantId"
                     :style="{ backgroundColor: variant.variantColor}"
                     @mouseover="updateProduct(index)">
                    
                </div>
                <button v-on:click="addToCart">Add to Cart</button>

                <div class="Cart">
                    <p>Cart({{ cart }})</p>
                </div>
            </div>
            
        </div>
    `,

    data() {
        return {
        product: 'Socks',
        image:'./assets/vmSocks-green.jpg',        
        inStock:true,
        details: ["90% cotton", "10% polyster", "Gender-neutral"],
        variants:[
            {
                variantId: 1234,
                variantColor: "blue",
                variantImage: './assets/vmSocks-green.jpg',
                variantQuantity: 5
            },
            {
                variantId: 5896,
                variantColor: "green",
                variantImage: './assets/vmSocks-blue.jpg',
                variantQuantity: 9
            }
        ],
        cart: 0
    }
    },
    methods: {
        addToCart: function () {
            this.cart += 1
        },
        updateProduct: function(index) {
            this.selectedVariant = index
            console.log(index)
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
    
  
})

var app = new Vue({
    el: '#app'
})
    