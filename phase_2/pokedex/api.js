const fetchPokemon = (pokemon) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      const myPokemon = {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
        type: data.types[0].type.name,
      };
      console.log(myPokemon);
      return myPokemon;
    });
};

module.exports = fetchPokemon;
