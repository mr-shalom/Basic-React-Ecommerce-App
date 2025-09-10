export function trimProductName(name, length) {
  return name.split(" ").length > length
    ? name.split(" ").slice(0, length).join(" ") + "..."
    : name;
}

export function multipleWords(word) {
  let firstWord = word[0].charAt(0).toUpperCase() + word[0].slice(1);
  let nextWord = word[1]?.charAt(0).toUpperCase() + word[1]?.slice(1);
  return `${firstWord} ${nextWord}`;
}

export const singleWord = (word) =>
  word[0].charAt(0).toUpperCase() + word[0].slice(1);

export function capitalizeWord(word) {
  let splittedWord = word.split(" ");
  let result = undefined;
  if (splittedWord.length > 1) result = multipleWords(splittedWord);
  else result = singleWord(splittedWord);
  return result;
}
