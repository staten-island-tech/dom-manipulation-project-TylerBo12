/* console.log(`connected`);

const DOMselectors = {
  button: document.getElementById(`btn`),
  text: document.querySelector(`.text`),
  empty: document.querySelector(`.nothing`),
  food: document.querySelectorAll(`.food`),
  container: document.querySelector(`.container`),
};
console.log(DOMselectors.food);

function backgroundAndText(background, text) {
  background.style.backgroundColor = `red`;
  text.textContent = `This a biiiiiiiiiiiiiig red box`;
  text.style.fontSize = `7rem`;
  text.style.margin = `1rem`;
}

DOMselectors.button.addEventListener("click", function () {
  backgroundAndText(DOMselectors.container, DOMselectors.text);
});

function changeLi(food) {
  let foodIndex = 1;
  DOMselectors.food.forEach((el) => {
    el.addEventListener(`click`, function () {
      el.textContent = `Hello ${foodIndex}`;
      foodIndex++;
    });
  });
}

changeLi(); */

const DOMselectors = {
  button: document.querySelector(`#btn`),
  buttonTwo: document.querySelector(`#btn2`),
  box: document.querySelector(`#container-box`),
  input: document.querySelector(`#input`),
  input2: document.querySelector(`#input2`),
};

/* function createObject() {
  const input = DOMselectors.input.value;
  DOMselectors.input.value = `Thakns`;
} */

DOMselectors.button.addEventListener(`click`, function () {
  const input = DOMselectors.input.value;
  DOMselectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMselectors.input.value = "";
});
DOMselectors.buttonTwo.addEventListener(`click`, function () {
  const input2 = DOMselectors.input2.value;
  DOMselectors.box.insertAdjacentHTML("beforeend", `<p>${input2}</p>`);
  DOMselectors.input.value = "";
});
