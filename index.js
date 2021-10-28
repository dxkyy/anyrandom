function number(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

const char = {
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
};

function shuffleString(String) {
  const shuffle = (v) => [...v].sort((_) => Math.random() - 0.5).join("");
  return shuffle(String);
}

function string(maxLength) {
  const charset = (string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");

  const randomString = (string = [...Array(maxLength)]
    .map((_) => charset[Math.floor(Math.random() * charset.length)])
    .join(""));
  return randomString;
}

function randomFrom(string) {
  const alphabet = string;

  const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];

  return randomChar;
}

console.log(randomFrom("hello my name is lmao"));
