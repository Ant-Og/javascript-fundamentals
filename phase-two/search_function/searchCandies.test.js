const searchCandies = require('./searchCandies');

describe("searchCandies", () => {
  it('Returns Mars and Maltesers when passsed Ma and 10', () => {
    expect(searchCandies('Ma', 10)).toBe(['Mars', 'Maltesers'])
  });

  it('Returns Mars when passed Ma and 2', () => {
    expect(searchCandies('Ma', 2)).toBe(['Mars'])
  });

  it('Returns Skittles, Skittles and Starburst when passed S and 10', () => {
    expect(searchCandies('S', 10)).toBe(['Skittles', 'Skittles', 'Starburst'])
  });

  it('Returns Skittles and Skittles when passed S and 4', () => {
    expect(searchCandies('S', 4)).toBe(['Skittles', 'Skittles'])
  });

  it('Returns Mars and Maltesers when passed ma and 10', () => {
    expect(searchCandies('ma', 10)).toBe(['Mars', 'Maltesers'])
  });
});