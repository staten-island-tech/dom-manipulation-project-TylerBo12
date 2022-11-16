const DOMselectors = {
  box3: document.querySelector(`#container-box3`),
  button3: document.querySelector(`#btn3`),
  input1: document.querySelector(`#input`),
  input2: document.querySelector(`#input2`),
  img: document.querySelector(`#img`),
  information: document.querySelector(`#information`),
  submit: document.querySelector(`#submit`),
  objectBox: document.querySelector(`.objectBox`),
};

DOMselectors.button3.addEventListener(`click`, function () {
  const input1 = DOMselectors.input1.value;
  const img = DOMselectors.img.value;
  const input2 = DOMselectors.input2.value;

  DOMselectors.objectBox.insertAdjacentHTML(
    "beforeend",
    `<div class = "objectXbox"><p>${input1}</p> <p><img src=${img}></p> <p>${input2}</p></div>`
  );
  DOMselectors.input1.value = "";
  DOMselectors.input2.value = "";
  DOMselectors.input3.value = "";
});
