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

const DOMselectors2 = {
  button: document.querySelector(`#btn2`),
  box: document.querySelector(`#container-box`),
  input: document.querySelector(`#input`),
};
const cat = `meow`;
DOMselectors2.box.insertAdjacentHTML(`beforebegin`, `This is an ${cat}`);
DOMselectors2.button.addEventListener(`click`, function () {
  let input = DOMselectors2.input.value;
  DOMselectors2.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMselectors2.input.value = "";
});
