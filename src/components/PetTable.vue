<template>
  <div>
    <h1 class="m-4">{{species}} for Adoption</h1>
    <b-table class="border bg-white" striped hover :items="pets">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pets/${{species}}/${data.index}`">
          {{
          data.value
          }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array
  }
};
</script>