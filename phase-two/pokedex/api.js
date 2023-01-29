const fetchPokemon = (pokemon) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => {
    let pokemon = { 
      name: data.name,
      id: data.id, 
      height: data.height,
      weight: data.weight,
     }
    console.log(pokemon)
  })
};

module.exports = fetchPokemon