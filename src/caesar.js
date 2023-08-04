// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // converts string to unicode values
    // utilizing charCodeAt() and UTF-8
  function toUnicode(characters){
    return characters.map((character) => {
      const unicode = character.toLowerCase().charCodeAt();
      return unicode >= 97 && unicode <= 122 ? unicode : character;
    });
  }
  
  function caesar(input, shift, encode = true) {
    // returns false for shift parameters
    if (!shift || shift==0 || shift< -25 || shift>25){return false}; 
    
    // switch from code to decode
    if (encode == false){ shift = (-1)*shift};
    
    
    // creates an array of input values
    let inputArray = input.split("");
    // converts array values to unicode
    let inputNumbers = toUnicode(inputArray);
    // shifts the unicode if it's a number
    // if it's not a number (space), then it just returns
    let shiftedValues = inputNumbers.map((number) => {
      return typeof number == "number" ? number + shift : number;
    });
    
    // fixes the values that went out of bounds
    let finalShiftedValues = shiftedValues.map((number) =>{
      if (typeof number == "number"){
        // under of minimum bounds 
        if (number <97){ return number +26};
        // over maximum bounds
        if (number >122){ return number -26};
      }
      return number;
    });
    
    // converts unicode back to a string
    let finalString = finalShiftedValues.map((number) => {
      return typeof number === "number" ? String.fromCharCode(number) : number;
    });
    return finalString.join("");        
  };
    
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

