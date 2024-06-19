var letterList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

var encryptedString = prompt();
encryptedString = encryptedString.split(" ").join("");

encryptedString = encryptedString.split("");
//original text converted to list of strings

for (var i = 0; i < encryptedString.length; i++) {
  encryptedString[i] = encryptedString[i].toLowerCase();
}
console.log(encryptedString);

//list of letters is converted to numeric equivalent
for (var i = 0; i < encryptedString.length; i++) {
  for (var j = 0; j < letterList.length; j++) {
    if (encryptedString[i] == letterList[j].toLowerCase()) {
      encryptedString[i] = numberList[j];
    }
  }
}
var decryptedString = [];
console.log(encryptedString); //numeric equivalent is printed

for (var i = 0; i < letterList.length-1; i++) {
  
  for (var j = 0; j < encryptedString.length; j++) {
    encryptedString[j]++;
  } //numeric list is shifted one to the right
  
  decryptedString = encryptedString.slice(0);
  
  for (var k = 0; k < decryptedString.length; k++) { //numbers are converted back to letters
    if (decryptedString[k] > 26) {
      decryptedString[k] = decryptedString[k] % 26;
    }
    for (var l = 0; l < numberList.length; l++) {
      
      if (decryptedString[k] == numberList[l]) {
        decryptedString[k] = letterList[l].toLowerCase();
      }
    }
  }
  console.log(decryptedString.join('') + "\n"); //shifted string should be printed
}