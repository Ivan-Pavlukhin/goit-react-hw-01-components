const randomNumber = () => Math.floor(Math.random() * (150 - 0) + 0);

const randomColor = () =>
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

export default randomColor;
