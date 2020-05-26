<template>
  <div>
    <h1>{{animal.name}} ({{this.$route.params.イヌorネコ}})</h1>
    <p>Age: {{animal.age}} years old</p>
    <p>Breed: {{animal.breed}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      animal: {}
    };
  },
  computed: {
    ...mapState(["ネコ", "イヌ"])
  },
  mounted() {
    const animal = this[this.$route.params.イヌorネコ][this.$route.params.id];
    this.animal = animal;
  }
};
</script>