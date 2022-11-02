console.log(`connected`);

const DOMselectors = {
  button: document.getElementById(`btn`),
  text: document.querySelector(`#text`),
  empty: document.querySelector(`.nothing`),
  food: document.querySelectorAll(`.food`),
};
console.log(DOMselectors.food);
