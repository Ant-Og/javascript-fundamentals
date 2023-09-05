const fetchPokemon = require('./api');

describe('fetchPokemon', () => {
  it('returns 5 attributes for a given pokemon', () => {
    return fetchPokemon('pikachu').then((data) => {
      expect(data.name).toEqual('pikachu');
      expect(data.id).toEqual(25);
      expect(data.height).toEqual(4);
      expect(data.weight).toEqual(60);
      expect(data.type).toEqual('electric');
    });
  });
});
