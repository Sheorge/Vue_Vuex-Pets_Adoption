<template>
  <div>
    <PetTable イヌorネコ="イヌ" :pets="イヌ" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import PetTable from "../components/PetTable";

export default {
  components: {
    PetTable
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["イヌ"])
  }
};
</script>
