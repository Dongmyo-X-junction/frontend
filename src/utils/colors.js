import seedrandom from "seedrandom";

// https://css-tricks.com/snippets/javascript/random-hex-color/
export const getRandomColor = (tag = "") => {
  const seed = [...tag].reduce((acc, val) => acc + val.charCodeAt(0), 0);
  const r = seedrandom(seed);
  const randomColor = Math.floor(r() * 16777215).toString(16);
  return `#${randomColor}`;
};
