const  breedFetcher = require('../breedFetcher');
const { assert } = require('chai');

describe('breedFetcher', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    breedFetcher('Siberian', (err, data) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expected = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expected, data);

      done();
    });
  });
    });