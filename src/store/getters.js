export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length;
  },
  getAllDogs: (state) => {
    return state.pets.filter((pet) => {
      return pet.species === "dog";
    });
  },
  getAllCats: (state) => {
    return state.pets.filter((pet) => {
      return pet.species === "cat";
    });
  },
};
