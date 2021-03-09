const polybiusModule = (function () {
function polybius(input, encode = true) {
  const J = "(i/j)"
  const poly = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", J, "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];

  const array = [];

  if (!encode) {
    const inSplit = input.split(" ");
    for (let i in inSplit) {
      if (Math.abs(inSplit[i].length % 2) == 1) { return false; }
      let word = [];
      for (let j = 0; j < inSplit[i].length; j++) {
        const corrLettr = poly[inSplit[i][j + 1] - 1][inSplit[i][j] - 1];
        word.push(corrLettr);
        j++;
      } array.push(word.join(""));
    } return array.join(" "); }

  const inLowSplit = input.toLowerCase().split("");
  inLowSplit.forEach((char) => {
    if (char.charCodeAt(0) <= 96 || char.charCodeAt(0) >= 123) { array.push(char); }
    try {
      for (let i in poly) {
        for (let j in poly[i]) {
          if (poly[i][j].includes(char)) { const pair = (parseInt(j + i) + 11).toString(); array.push(pair);
          }
        }
      }
    } catch (error) { throw "womp womp"; }
  }); return array.join(""); }

return {
  polybius
};
})();

module.exports = polybiusModule.polybius;