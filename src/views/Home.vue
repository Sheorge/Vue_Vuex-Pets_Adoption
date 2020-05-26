<template>
  <div class="home-view-container">
    <div class="container">
      <h1 class="m-5">動物保護管理アプリ(イヌ・ネコ)</h1>
      <h4 class="my-4">
        現在保護された動物の数：
        {{animalsCount}}匹
      </h4>
      <div class="row my-4">
        <div class="col pt-5 pb-4 m-3 rounded">
          <img class="circle-img d-block" src="../images/dog.jpg" alt="dog" />
          <h5 class="my-4">
            現在保護されたイヌの数：
            {{getAllDogs.length}}匹
          </h5>
          <router-link to="/dogs" class="btn btn-primary">イヌ一覧</router-link>
        </div>
        <div class="col pt-5 pb-4 m-3 rounded">
          <img class="circle-img d-block" src="../images/cat.jpg" alt="cat" />
          <h5 class="my-4">
            現在保護されたネコの数：
            {{getAllCats.length}}匹
          </h5>

          <router-link to="/cats" class="btn btn-primary">ネコ一覧</router-link>
        </div>
      </div>
    </div>
    <button @click="togglePetForm" class="btn btn-primary">新しい動物を追加</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm" class="pt-3 pb-5 w-50 m-auto">
      <b-form-group id="input-group-2" label="名前" label-for="input-2">
        <b-form-input id="input-2" v-model="formData.名前" required placeholder="名前を入力"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="品種" label-for="input-2">
        <b-form-input id="input-2" v-model="formData.品種" required placeholder="品種を入力"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="性別" label-for="input-3">
        <b-form-select id="input-3" v-model="formData.性別" :options="['オス','メス']" required></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-3" label="イヌorネコ" label-for="input-3">
        <b-form-select id="input-3" v-model="formData.イヌorネコ" :options="['イヌ','ネコ']" required></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="年齢" label-for="input-2">
        <b-form-input id="input-2" v-model="formData.年齢" required placeholder="Enter age"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="毛色" label-for="input-2">
        <b-form-input id="input-2" v-model="formData.毛色" required placeholder="毛色を入力"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="体重kg" label-for="input-2">
        <b-form-input id="input-2" v-model="formData.体重kg" required placeholder="体重を数字で入力"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="その他の詳細" label-for="input-2">
        <b-form-textarea id="input-2" v-model="formData.その他の詳細" required placeholder="その他の詳細を入力"></b-form-textarea>
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
        イヌorネコ: null,
        名前: "",
        品種: "",
        性別: "",
        年齢: 0,
        毛色: "",
        体重kg: 0,
        その他の詳細: null
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
        イヌorネコ,
        名前,
        品種,
        性別,
        年齢,
        毛色,
        体重kg,
        その他の詳細
      } = this.formData;
      const payload = {
        イヌorネコ,
        pet: {
          名前,
          品種,
          イヌorネコ,
          性別,
          年齢,
          毛色,
          体重kg,
          その他の詳細
        }
      };
      this.addPet(payload);
      this.formData = {
        イヌorネコ: null,
        名前: "",
        性別: null,
        年齢: 0,
        毛色: null,
        体重kg: 0,
        その他の詳細: null
      };
      if (イヌorネコ === "イヌ") {
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
