const anyrandom = {
  letter: () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    return randomLetter;
  },
  character: () => {
    const charset = (string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");

    const randomChar = charset[Math.floor(Math.random() * charset.length)];

    return randomChar;
  },
  randomFrom: (s) => {
    const alphabet = s;

    const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];

    return randomChar;
  },
  shuffleString: (s) => {
    const shuffle = (v) => [...v].sort((_) => Math.random() - 0.5).join("");
    return shuffle(s);
  },
  string: (maxLength) => {
    const charset = (string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");

    const randomString = (string = [...Array(maxLength)]
      .map((_) => charset[Math.floor(Math.random() * charset.length)])
      .join(""));
    return randomString;
  },
  number: (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  },
};
module.exports = anyrandom;
