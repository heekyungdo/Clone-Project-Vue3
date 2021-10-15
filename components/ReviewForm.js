// v-bind which creates a one-way binding from the data to the template
// when working with forms need to be binding from the template to the data so that when a user inputs their name into an input.
// for example, we record and store that value in our data. The model helps us achieve this creating two way data binding.
app.component("review-form", {
  /*HTML*/

  template: `<form class="review-form" @submit.prevent="onSubmit"> <!-- .prevent is modifier which prevents the default -->
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <!-- creating a binding between v-model="name" in template and name in data. -->
    <input id="name" v-model="name">

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <!-- .number is modifier that typecasts the value as a number -->
    <!-- typecast is 변수의 type을 강제로 다른 type으로 변경하는 것 -->
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <input class="button" type="submit" value="Submit">  

  </form>`,
  date() {
    return {
      name: "",
      review: "",
      rating: null,
    };
  },
  methods: {
    onSubmit() {
      if (
        this.name === "" ||
        this.review === "" ||
        this.rating === null ||
        this.recommend === null
      ) {
        alert("Review is incomplete. Please fill out every field.");
        return;
      }

      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
      };
      this.$emit("review-submitted", productReview);

      this.name = "";
      this.review = "";
      this.rating = null;
    },
  },
});
