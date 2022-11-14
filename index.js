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
  box3: document.querySelector(`#container-box3`),
  button3: document.querySelector(`#btn3`),
  input1: document.querySelector(`#input`),
  input2: document.querySelector(`#input2`),
  input3: document.querySelector(`#input3`),
  information: document.querySelector(`#information`),
  submit: document.querySelector(`#submit`),
  objectBox: document.querySelector(`.objectBox`),
};

DOMselectors.button3.addEventListener(`click`, function () {
  const input1 = DOMselectors.input1.value;
  const input2 = DOMselectors.input2.value;
  const input3 = DOMselectors.input3.value;
  DOMselectors.box3.insertAdjacentHTML(
    "beforeend",
    `<p>${input1} ${input2} ${input3}</p>`
  );
  DOMselectors.input1.value = "";
  DOMselectors.input2.value = "";
  DOMselectors.input3.value = "";
});
