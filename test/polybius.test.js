const {expect} = require("chai");
const {polybius} = require("../src/polybius");

describe("polybius", () =>{
  it("should still be a string when encoding", () => {
    let actual = polybius("thinkful");
    expect(actual).to.be.a("string");
  });
  
  it("the number of characters in the string excluding spaces should be even", () => {
    let actual = polybius("3251131343 2543241341", false);
    let expected = "hello world";
    expect(actual).to.equal(expected);
  });
  
  it("should maintain spaces throughout", () => {
    let actual = polybius("3251131343 2543241341", false);
    let expected = "hello world";
    expect(actual).to.equal(expected);
  });
  
  it ("should ignore capital letters", () => {
    let actual = polybius("THINKFUL");
    let expected = "4432423352125413";
    expect(actual).to.equal(expected);
  });
  
  it("should encode both 'i' and 'j' as '42'", () => {
    let actual = polybius("Jim");
    let expected = "424223";
    expect(actual).to.equal(expected);
  });
});

