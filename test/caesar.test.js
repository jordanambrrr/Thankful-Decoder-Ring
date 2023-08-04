const {expect} = require("chai");
const {caesar} = require("../src/caesar");

describe("caesar", () =>{
  it("is a function", () =>{
    expect(caesar).to.be.a("function");
  });
  
  it('returns "wklqnixo" when "thinkful"', () => {
    const actual = caesar("thinkful", 3);
    const expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });
  
    it('returns "thinkful" when "wklqnixo"', () => {
    const actual = caesar("wklqnixo", 3, false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  
  it("returns false for invalid parameters", () => {
    const actual = caesar("thinkful");
    const expected = false;
    expect(actual).to.equal(expected);
  });
  
  it("returns false for invalid parameters", () => {
    const actual = caesar("thinkful",124);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  
  it("returns 'this is a secret message!' when 'BPQA qa i amkzmb umaaiom!'", () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    const expected = "this is a secret message!";
    expect(actual).to.equal(expected);
  });
});