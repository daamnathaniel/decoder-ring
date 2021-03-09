const substitution = require('../src/substitution');
const expect = require('chai').expect;

const testAlphabet = 'zyxwvutsrqponmlkjihgfedcba';

describe('substitution', () => {
  it("should return false if substitution alphabet is missing", () => {
    expect(substitution("test", encode=true)).to.equal(false);
  });

  it("should return false if the substitution alphabet is not exactly 26 characters", () => {
    expect(substitution("test", 'abc', true)).to.equal(false);
  });

  it("should return false if the substitution alphabet does not contain unique characters", () => {
    expect(substitution("test", 'aacdefggijkllnopqrstuvwxyz', true)).to.equal(false);
  });

  it("should encode using the given alphabet", () => {
    expect(substitution("abc", testAlphabet, encode=true)).to.equal("zyx");
  });

  it("should decode using the given alphabet", () => {
    expect(substitution("zyx", testAlphabet, encode=false)).to.equal("abc");
  });
});