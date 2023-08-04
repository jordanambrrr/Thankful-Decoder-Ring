// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    const codeKeys = {};
    // check if alphabet is valid
      // must be a string with 26 characters
      // if alphabet is invalid, return false
    if (!alphabet || alphabet.length <26 || alphabet >26) return false;
      // create codeKeys object 
    let charCodeCount = 97;
    
    // loop through alphabet and assign new letter
      // if any duplicate values are found, the function returns false
      for (let i=0;i<=25;i++){
      if (Object.values(codeKeys).includes(alphabet[i])){ return false}
      else{
        codeKeys[String.fromCharCode(charCodeCount)] = alphabet[i];
        charCodeCount++;
      }
    }
    // convert input string to lowercase and split into array
    const codedString = input.toLowerCase().split("");

    {
    // encode and decode
    // iterate through each letter in input and check if it matches any codeKeys
    return codedString.map(letter => {
      for (let uncodedLetter in codeKeys){
    // if match is found, return substitution
      // preserve spaces
        let substitutionValue = codeKeys[uncodedLetter];
        if (letter == " ") return " ";
        if (encode && letter == uncodedLetter) return substitutionValue;
        if (!encode && letter == substitutionValue) return uncodedLetter;
      }
    }).join("");
  }
}
  
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };