const {expect} = require("chai");
const {substitution} = require("../src/substitution");

describe("substitution", () =>{
  it("the input could include spaces and letters as well as special characters such as #, $, *, etc.", () => {
    let actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.equal("message");
  });
  
  it("should maintain spaces when decoding", () => {
    let actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.equal("you are an excellent spy");
  });
  
  it("should maintain spaces when encoding", () => {
    let actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal("elp xhm xf mbymwwmfj dne");
  }); 
  
  it("should ignore capital letters", () => {
    let actual = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal("jrufscpw");
  }); 
  
  it("should return false for incorrect length of alphabet", () => {
    let actual = substitution("whoops", "xoyqmcgrukswaflnthdjpzibeabsbvx-#d*h^hs");
    expect(actual).to.be.false;
  }); 
});