<template>
  <div>
    <PetTable イヌorネコ="ネコ" :pets="ネコ" />
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
    ...mapState(["ネコ"])
  }
};
</script>
