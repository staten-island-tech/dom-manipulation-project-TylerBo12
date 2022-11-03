console.log(`connected`);

const DOMselectors = {
  button: document.getElementById(`btn`),
  text: document.querySelector(`#text`),
  empty: document.querySelector(`.nothing`),
  food: document.querySelectorAll(`.food`),
};
console.log(DOMselectors.food);

function backgroundAndText(background, text) {
  background.style.backgroundColor = `red`;
  text.textContent = `This a biiiiiiiiiiiiiig red box`;
  text.style.fontSize = `7rem`;
  text.style.margin = `1rem`;
}

backgroundAndText(DOMselectors.button, DOMselectors.text);

DOMselectors.button.addEventListener(`click`, function () {
  backgroundAndText(DOMselectors.button, DOMselectors.text);
});
