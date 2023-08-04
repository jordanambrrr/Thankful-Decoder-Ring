// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  

  function polybius(input, encode = true) {
    // inputting the polybius square
    const polybiusSquare = {
      1: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'},
      2: { 1: 'f', 2: 'g', 3: 'h', 4: 'i/j', 5: 'k'},
      3: { 1: 'l', 2: 'm', 3: 'n', 4: 'o', 5: 'p'},
      4: { 1: 'q', 2: 'r', 3: 's', 4: 't', 5: 'u'},
      5: { 1: 'v', 2: 'w', 3: 'x', 4: 'y', 5: 'z'},
    };
    
    // creates an array from the input
    const codedString = input.toLowerCase().split("");
    // removes spaces
    const codedWithoutSpaces = codedString.filter(code => code != " ");
    // decode coded string
    if (!encode){
      let decodedString = "";
      // check if the array of numbers is even
      if (codedWithoutSpaces.length %2 !==0) return false;
      for (let i=0;i<codedString.length;i+=2){
      // add space if present
        if (codedString[i] === " "){
          decodedString += " ";
      // reset index
          i--;
      // decode
        } else { decodedString += polybiusSquare[codedString[i+1]][codedString[i]];}
      }
    return decodedString;
    }
    
    // encode uncoded string
    else{
      const encodedString = [];
      for (let letter of codedString){
        if (letter == " "){ encodedString.push(" ");}
        for (let j=1; j<6; j++){
          for (let i=1; i<6; i++){
            if( polybiusSquare[j][i].includes(letter)){
              encodedString.push(i);
              encodedString.push(j);
            }
          }
        }
      }
      return encodedString.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };