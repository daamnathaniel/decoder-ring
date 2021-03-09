// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// // Only add code (e.g., helper methods, variables, etc.) within the scope
// // of the anonymous function on line 6
 
const substitutionModule = (function () {
function substitution(input, alphabet, encode = true) {
  
    const alfa = 'abcdefghijklmnopqrstuvwxyz';
      
    if (!input || !alphabet) return false;
    if (alphabet.length !== 26) return false;
    
    const asdf = input.toLowerCase();
    let output = '';
    const arr = [];
    
    for (let letts in alphabet) {
      if (arr.indexOf(alphabet[letts]) < 0) {
        arr.push(alphabet[letts]); } 
      else { return false; }
    }
  
    for (let i = 0; i < asdf.length; i++) {
      if (asdf[i] === ' ') { output += ' '; } 
      else { 
        let index = alfa
        let abc = alphabet;
  
        if (!encode) {
          index = alphabet;
          abc = alfa; }
            
        for (let j = 0; j < index.length; j++) {
          if (asdf[i] === index[j]) { output += abc[j]; }
        }
      }    
    } return output; }
  
              
  return { substitution,};
})();

module.exports = substitutionModule.substitution;


