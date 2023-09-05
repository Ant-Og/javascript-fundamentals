class Pokedex {
  constructor() {
    this.pokedex = [];
  }

  catch(pokemon) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        this.pokedex.push({
          name: data.name,
          id: data.id,
          height: data.height,
          weight: data.weight,
          type: data.types[0].type.name,
        });
      });
  }

  all() {
    return this.pokedex;
  }
}

module.exports = Pokedex;
