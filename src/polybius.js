const polybiusModule = (function () {
  function createAlphaGrid(encode = true) {
    const alpha = "abcdefgh(i/j)klmnopqrstuvwxyz";
    let row = 1,
      column = 1;
    const alphaGrid = {};
    for (let i = 0; i < alpha.length; i++) {
      if (column == 6) {
        column = 1;
        row += 1;
      }
      if (alpha[i] == "(") {
        alphaGrid[alpha.substring(i, i + 5)] = `${column}${row}`;
        column += 1;
        i += 4;
      } else {
        alphaGrid[alpha[i]] = `${column}${row}`;
        column += 1;
      }
    }
    if (encode === true) {
      return alphaGrid;
    } else {
      for (const key in alphaGrid) {
        alphaGrid[alphaGrid[key]] = key;
      }
      return alphaGrid;
    }
  }

  function polybius(input, encode = true) {
    if (encode === false && input.replace(" ", "").length % 2 > 0) return false;

    const string = input.toLowerCase();
    const alphaGrid = createAlphaGrid(encode);
    var result = "";
    const encodeTF = encode === true ? 1 : 2;

    for (let i = 0; i < string.length; i += encodeTF) {
      const coord = string.slice(i, i + encodeTF);
      if (input[i] == " ") {
        result += string[i];
        i = i + (1 - encodeTF);
      } else if (alphaGrid[coord]) {
        result += alphaGrid[coord];
      } else {
        const alphaGridKeys = Object.keys(alphaGrid);
        const foundKey = alphaGridKeys.find((key) => key.includes(coord));
        result += alphaGrid[foundKey];
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
