const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    // this updateCart method will update the actual cart
    updateCart(id) {
      // this.cart += 1;
      this.cart.push(id);
    },
    notUpdateCart(id) {
      const index = this.cart.indexOf(id);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
    },
  },
});
