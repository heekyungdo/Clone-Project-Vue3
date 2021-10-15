const app = Vue.createApp({
  data() {
    return {
      cart: 0,
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
      this.cart += 1;
    },
    updateVariant(index) {
      // bring this path -> image: "./assets/images/socks_green.jpg"
      this.selectedVariant = index;
      // console.log(index);
    },

    // solution
    // removeFromCart() {
    //   if (this.cart >= 1) {
    //     this.cart -= 1;
    //   }
    // },
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
  },
});
