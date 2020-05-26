<template>
  <div class="home-view-container">
    <div class="container">
      <h1 class="m-5">動物保護管理アプリ(イヌ・ネコ)</h1>
      <div class="row my-4">
        <div class="col pt-5 pb-4 m-3 rounded">
          <img class="circle-img d-block" src="../images/dog.jpg" alt="dog" />
          <h5 class="my-4">
            現在保護されているイヌの数：
            {{getAllDogs.length}}
          </h5>
          <router-link to="/dogs" class="btn btn-primary">イヌ一覧</router-link>
        </div>
        <div class="col pt-5 pb-4 m-3 rounded">
          <img class="circle-img d-block" src="../images/cat.jpg" alt="cat" />
          <h5 class="my-4">
            現在保護されているネコの数：
            {{getAllCats.length}}
          </h5>

          <router-link to="/cats" class="btn btn-primary">ネコ一覧</router-link>
        </div>
      </div>
      <h5 class="my-4">
        現在保護されている動物の数：
        {{animalsCount}}
      </h5>
    </div>
    <button @click="togglePetForm" class="btn btn-primary">新しい動物を追加</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm" class="pt-3 pb-5 w-50 m-auto">
      <b-form-group id="input-group-2" label="名前" label-for="input-2">
        <b-form-input id="input-2" v-model="formData.name" required placeholder="名前を入力"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="品種" label-for="input-2">
        <b-form-input id="input-2" v-model="formData.breed" required placeholder="品種を入力"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="性別" label-for="input-3">
        <b-form-select id="input-3" v-model="formData.gender" :options="['オス','メス']" required></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="イヌ・ネコ" label-for="input-3">
        <b-form-select id="input-3" v-model="formData.species" :options="['dogs','cats']" required></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="年齢" label-for="input-2">
        <b-form-input id="input-2" v-model="formData.age" required placeholder="Enter age"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="毛色" label-for="input-2">
        <b-form-input id="input-2" v-model="formData.color" required placeholder="毛色を入力"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="体重" label-for="input-2">
        <b-form-input id="input-2" v-model="formData.weight" required placeholder="Enter weight"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="その他の詳細" label-for="input-2">
        <b-form-textarea id="input-2" v-model="formData.notes" required placeholder="その他の詳細を入力"></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary" class="mr-3">動物を追加</b-button>
      <b-button type="reset" variant="danger">リセット</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "home",
  data() {
    return {
      showPetForm: false,
      formData: {
        species: null,
        name: "",
        breed: "",
        gender: "",
        age: 0,
        color: "",
        weight: 0,
        notes: null
      }
    };
  },
  computed: {
    ...mapGetters(["animalsCount", "getAllCats", "getAllDogs"])
  },
  methods: {
    ...mapActions(["addPet"]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit() {
      const {
        species,
        name,
        breed,
        gender,
        age,
        color,
        weight,
        notes
      } = this.formData;
      const payload = {
        species,
        pet: {
          name,
          breed,
          gender,
          age,
          color,
          weight,
          notes
        }
      };
      this.addPet(payload);
      this.formData = {
        species: null,
        name: "",
        gender: null,
        age: 0,
        color: null,
        weight: 0,
        notes: null
      };
      if (species === "dogs") {
        this.getAllDogs.length += 1;
      } else {
        this.getAllCats.length += 1;
      }
    }
  }
};
</script>

<style lang="scss">
.col {
  background-color: #fff;
}
.circle-img {
  width: 200px;
  border-radius: 50%;
  margin: 0 auto;
}
</style>
