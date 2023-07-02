const searchCandies = require('./search_candies');

describe('searchCandies', () => {
  it('Returns Mars and Maltesers', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars',
    'Maltesers'])
  });

  it('Returns Mars', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars'])
  });

  it('Returns Skittles, Skittles, Starburst', () => {
    expect(searchCandies('S', 10)).toEqual(['Skittles', 
    'Skittles', 
    'Starburst'])
  });

  it('Returns Skittles, Skittles', () => {
    expect(searchCandies('S', 4)).toEqual(['Skittles', 
    'Skittles'])
  });

  it('Returns Mars, Maltesers given lowercase user input', () => {
    expect(searchCandies('ma', 10)).toEqual(['Mars',
    'Maltesers'])
  });
});