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
  box: document.querySelector(`#container-box`),
  box2: document.querySelector(`#container-box2`),
  box3: document.querySelector(`#container-box3`),
  button: document.querySelector(`#btn`),
  button2: document.querySelector(`#btn2`),
  button3: document.querySelector(`#btn3`),
  input: document.querySelector(`#input`),
  input2: document.querySelector(`#input2`),
  input3: document.querySelector(`#input3`),
};

DOMselectors.button.addEventListener(`click`, function () {
  const input = DOMselectors.input.value;
  DOMselectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMselectors.input.value = "";
});
DOMselectors.button2.addEventListener(`click`, function () {
  const input2 = DOMselectors.input2.value;
  DOMselectors.box2.insertAdjacentHTML("beforeend", `<p>${input2}</p>`);
  DOMselectors.input2.value = "";
});
DOMselectors.button3.addEventListener(`click`, function () {
  const input3 = DOMselectors.input3.value;
  DOMselectors.box3.insertAdjacentHTML("beforeend", `<p>${input3}</p>`);
  DOMselectors.input3.value = "";
});
