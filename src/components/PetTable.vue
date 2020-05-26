<template>
  <div>
    <h1 class="m-4">保護された{{イヌorネコ}}の一覧</h1>
    <b-table class="border bg-white" striped hover :items="pets">
      <template v-slot:cell(name)="data">
        <router-link :to="`/pets/${{イヌorネコ}}/${data.index}`">
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
    イヌorネコ: String,
    pets: Array
  }
};
</script>