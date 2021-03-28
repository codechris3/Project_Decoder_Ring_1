// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // if statement returning false if certain conditions are not met
    if (!shift || shift < -25 || shift > 25) return false;
    //a=97 and z=122

    let originalString = input.toLowerCase(); //ignore uppercase
    var result = ""; //empty string to be filled
    var charCode = 0; //character code baseline to use to shift letters

    if (encode === true) {
      for (let i = 0; i < originalString.length; i++) {
        const char = originalString[i];
        let charCode = char.charCodeAt(); //turn each individual letter into code number

        if (charCode < 97 || charCode > 122) {
          // `char` is not shiftable
          result += String.fromCharCode(charCode);
          continue;
        }
        // from now on, `char` is definitely a shiftable character
        let shiftedChar = charCode + shift;
        if (shiftedChar < 97) {
          shiftedChar += 26;
        }
        if (shiftedChar > 122) {
          shiftedChar -= 26;
        }
        result += String.fromCharCode(shiftedChar); //turn code back to letters and form into a string
      }
      return result;
    } else {
      for (let i = 0; i < originalString.length; i++) {
        const char = originalString[i];
        let charCode = char.charCodeAt();

        if (charCode < 97 || charCode > 122) {
          // `char` is not shiftable
          result += String.fromCharCode(charCode);
          continue;
        }
        // from now on, `char` is definitely a shiftable character
        let shiftedChar = charCode - shift;
        if (shiftedChar < 97) {
          shiftedChar += 26;
        }
        if (shiftedChar > 122) {
          shiftedChar -= 26;
        }
        result += String.fromCharCode(shiftedChar); //turn code back to letters and form into a string
      }
      return result;
    }
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
