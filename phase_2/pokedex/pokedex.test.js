const Pokedex = require('./pokedex');

describe('Pokedex', () => {
  it('returns a list of pokemon that the user has caught in their pokedex', async () => {
    const pokedex = new Pokedex();
    await pokedex.catch('pikachu');
    await pokedex.catch('jigglypuff');
    await pokedex.catch('charizard');
    await pokedex.catch('mew');
    await pokedex.catch('mewtwo');
    const expectedObject = [
      { name: 'pikachu', id: 25, height: 4, weight: 60, type: 'electric' },
      { name: 'jigglypuff', id: 39, height: 5, weight: 55, type: 'normal' },
      { name: 'charizard', id: 6, height: 17, weight: 905, type: 'fire' },
      { name: 'mew', id: 151, height: 4, weight: 40, type: 'psychic' },
      { name: 'mewtwo', id: 150, height: 20, weight: 1220, type: 'psychic' }
    ];
    expect(pokedex.all()).toEqual(expectedObject);
  });
});
