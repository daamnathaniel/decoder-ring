
const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
   let asdf = input.toLowerCase()
   let output = ""
   let newINdex = 0;
   let alfa = 'abcdefghijklmnopqrstuvwxyz'
    
    if(shift < -25 || shift > 25 || shift === 0){ return false }
    
    for(char in input){
        char = asdf[char]

      if(alfa.indexOf(char) === -1) { output += char }

      [...alfa].find((letts) => {
        if(letts === char){
          encode ? newINdex = alfa.indexOf(letts) + shift : newINdex = alfa.indexOf(letts) - shift
        
          if(newINdex >= 26){ newINdex -= 26 }
            else if(newINdex <= -1){ newINdex += 26 }
          output += alfa[newINdex]
        }     
      })
    } return output }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;


