export default {
  animalsCount: (state) => {
    return state.ネコ.length + state.イヌ.length;
  },
  getAllDogs: (state) => {
    return state.pets.filter((pet) => {
      return pet.イヌorネコ === "イヌ";
    });
  },
  getAllCats: (state) => {
    return state.pets.filter((pet) => {
      return pet.イヌorネコ === "ネコ";
    });
  },
};
