// https://css-tricks.com/snippets/javascript/random-hex-color/
export const getRandomColor = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return `#${randomColor}`;
}