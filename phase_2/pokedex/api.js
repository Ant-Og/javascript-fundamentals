const fetchPokemon = (pokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
      const pokemonClean = {
        name: data.name,
        id: data.id,
        height: data.height,
        weight: data.weight,
      };
      console.log(pokemonClean);
    });
};

module.exports = fetchPokemon;
