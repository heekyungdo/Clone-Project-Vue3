const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      //   solution
      //   url: "https://github.com/heekyungdo",
      //   solution

      inStock: true,
      // inventory: 1,

      //   solution
      //   onSale: true,
      //   solution

      details: ["50% cotton", "30% wool", "20% polyester"],
      //   sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(variantImage) {
      // bring this path -> image: "./assets/images/socks_green.jpg"
      this.image = variantImage;
    },

    // solution
    // removeFromCart() {
    //   if (this.cart >= 1) {
    //     this.cart -= 1;
    //   }
    // },
    // solution
  },
});
