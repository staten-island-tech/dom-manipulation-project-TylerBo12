const DOMselectors = {
  button: document.querySelector(`#btn1`),
  button2: document.querySelector(`#btn2`),
  box3: document.querySelector(`#container-box3`),
  input1: document.querySelector(`#input`),
  input2: document.querySelector(`#input2`),
  img: document.querySelector(`#img`),
  information: document.querySelector(`#information`),
  submit: document.querySelector(`#submit`),
  objectBox: document.querySelector(`.objectBox`),
};

DOMselectors.button.addEventListener(`click`, function () {
  const input1 = DOMselectors.input1.value;
  const img = DOMselectors.img.value;
  const input2 = DOMselectors.input2.value;

  DOMselectors.objectBox.insertAdjacentHTML(
    "beforeend",
    `<div class = "objectXbox"> <p>${input1}</p> <p><img src= ${img} class="imgView"></p> <p>${input2}</p> <p><button id="button2">Remove</button></p></div>`
  );
  DOMselectors.input1.value = "";
  DOMselectors.img.value = "";
  DOMselectors.input2.value = "";
});
DOMselectors.button2.addEventListener(`click`, function removeObject(e) {
  e.preventDefault();
  objectXbox.parentNode.removeChild(objectBox);
  return false;
});
