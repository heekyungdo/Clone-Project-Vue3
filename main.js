const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_green.jpg",

      //   solution
      url: "https://github.com/heekyungdo",
      //   solution

      //   inStock: false,
      inventory: 0,

      //   solution
      onSale: true,
      //   solution

      details: ["50% cotton", "30% wool", "20% polyester"],
      sizes: ["S", "M", "L", "XL"],
      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
      ],
    };
  },
});
