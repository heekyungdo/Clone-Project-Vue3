app.component("product-display", {
    props: {
        premium: {
            type:Boolean,
            required:true
        }
    }
    
  template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :class="{'out-of-stock-img':!inStock}" v-bind:src="image" />

        <!-- solution -->
        <!-- <a v-bind:href="url">Heekyung's Github</a> -->
        <!-- solution -->
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <!-- solution -->
        <p v-if="onSale">{{secondTitle}}</p>
        <!-- solution -->

        <!-- if in stock is true, show the first P tag -->
        <!-- Otherwise or v-else, show the second P tag -->
        <!-- Don't need to pair it with v-else -->
        <!-- Don't need a fallback element wth v-else beneath it. -->
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping:{{shipping}}</p>
        
        <!-- if inventory is greater than 10, show the In Stock -->
        <!-- <p v-if="inventory>10">In Stock</p> -->
        <!-- if inventory is greater than 0 and less than or equal to 10, show the Almost sold out! -->
        <!-- <p v-else-if="inventory <=10&&inventory>0">Almost sold out!</p> -->
        <!-- if inventory is zero, default to the final level of v-else-->
        <!-- <p v-else>Out of Stock</p> -->

        <!-- solution -->
        <!-- <p v-if="onSale">On Sale!</p> -->
        <!-- solution -->

        <!-- when v-show returns true, it displays on the screen, when v-show returns false, it displays none. it's just like display:none and on (toggling off) -->
        <!-- <p v-show="inStock">In Stock</p> -->

        <ul>
          <!-- print out each detail or each element from the details array-->
          <li v-for="detail in details">{{detail}}</li>
        </ul>

        <!-- solution -->
        <!-- <ul>
          <li v-for="(size,index) in sizes" :key="index">{{size}}</li>
        </ul> -->
        <!-- solution -->

        <!-- <div v-for="products in variants">{{products}}</div> -->
        <!-- <div v-for="products in variants">{{products.id}}</div> -->
        <!-- key attribute and set that equal to products.id -->
        <!-- v-bind:key -> This gives each DOM element a unique key so that Vue can essentially grasp onto the element and not lose track of it as things update and change within your app.-->
        <!-- This provides you some performance improvements and also later down the line-->
        <!-- if you're doing something like animating your elements, you'll find that the key attribute is really helpful with things like that-->
        <!-- To get access to the index we'll pass it in as a second parameter in our v=for-->
        <div
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }"
        >
          <!-- {{variant.color}} -->
        </div>

        <!-- Camel vs Kebab are same -->
        <!-- <div :style="{backgroundColor:variant.color}"></div>
        <div :style="{'background-color':variant.color}"></div> -->

        <!-- it's incrementing our cart by a value of one. -->
        <!-- <button class="button" v-on:click="cart+=1">Add to Cart</button> -->
        <!-- disabled button whenever our product is not in stock  -->
        <!-- :class -> disabledButton is the class name, !inStock is a condition that we're evaluating to determine -->
        <button
          class="button"
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock"
          v-on:click="addToCart"
        >
          Add to Cart
        </button>

        <!-- solution -->
       <button class="button" v-on:click="removeFromCart">
          Remove Item
        </button>
        <!-- solution -->
      </div>
    </div>
  </div>`,
  data() {
    return {
      //   cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      onSale: true,
      // we're gonna update this with the index of the variant that's currently hovered on
      selectedVariant: 0,
      // image: "./assets/images/socks_green.jpg",
      //   solution
      //   url: "https://github.com/heekyungdo",
      //   solution

      // inStock: true,
      // inventory: 1,

      //   solution
      //   onSale: true,
      //   solution

      details: ["50% cotton", "30% wool", "20% polyester"],
      //   sizes: ["S", "M", "L", "XL"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
    //   this.cart += 1;
    // this is how the other parts know that event happens.
    // we're emitting or bubbling up that event (go to html)
    this.$emit("add-to-cart", this.variants[this.selectedVariant].id)
    },
    updateVariant(index) {
      // bring this path -> image: "./assets/images/socks_green.jpg"
      this.selectedVariant = index;
      // console.log(index);
    },

    // solution
    removeFromCart() {
    
        this.$emit("remove-from-cart", this.variants[this.selectedVariant].id)
      
    },
    // solution
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      // zero targets the first one in variants
      // one targets the seond one in variants
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },

    // solution
    secondTitle() {
      if (this.onSale) {
        return this.brand + " " + this.product + " " + "is on sale.";
      }
    },
    // solution

    shipping() {
        if (this.premium) {
            return "Free"
        }
        return 2.99
    }

  },
});
