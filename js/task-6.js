function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputUser = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

const createBoxes = (event) => {
  boxesContainer.innerHTML = "";
  const boxes = [];
  let boxSize = 30;

  for (let i = 0; i < event; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
    boxSize += 10;
  }
  boxesContainer.append(...boxes);
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = "";
};
createBtn.addEventListener("click", () => {
  const event = Number(inputUser.value);
  if (event >= 1 && event <= 100) {
    createBoxes(event);
    inputUser.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

destroyBtn.addEventListener("click", destroyBoxes);
