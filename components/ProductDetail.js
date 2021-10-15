app.components("product-details", {
  props: {
    detail: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `  <ul>
  <!-- print out each detail or each element from the details array-->
  <li v-for="detail in details">{{detail}}</li>
</ul>`,
});
