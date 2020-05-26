export default {
  appendPet: (state, { イヌorネコ, pet }) => {
    state[イヌorネコ].push(pet);
  },
};
