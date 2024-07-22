//Day 10: Event Handling

//Activity 1: Basic Event Handling

//Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const para = document.querySelector(".click");
const btn = document.querySelector(".btnClick");
btn.addEventListener("click", () => {
  para.textContent = "Text has Changed";
});

//Task 2:  Add a double-click event listener to an image that toggles its visibility.

const img = document.querySelector(".img");
img.addEventListener("dblclick", () => {
  console.log("pri");
  img.style.visibility = "hidden";
});

//Activity 2: Mouse Events

//Task 3: Add a mouseover event listener to an element that changes its background color.

para.addEventListener("mouseover", () => {
  para.style.backgroundColor = "cyan";
});

//Task 4: Add a mouseout event listener to an element that resets its background color.
para.addEventListener("mouseout", () => {
  para.style.backgroundColor = "";
});

//Activity 3: Keyboard Events

//Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

const input = document.querySelector(".input");
input.addEventListener("keydown", (e) => {
  console.log(e.key);
});

//Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const textChange = document.querySelector(".keyup");
input.addEventListener("keyup", (e) => {
  textChange.textContent = e.target.value;
});

//Activity 4: Form Events

//Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
  console.log(e.target[1].value);
});

//Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const select = document.querySelector("#select");
const selectPara = document.querySelector(".selectPara");

select.addEventListener("change", () => {
  selectPara.textContent = select.value;
  document.body.appendChild(selectPara);
});

//Activity 5: Event Delegation

//Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const ul = document.querySelector(".ul");

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") console.log(e.target.innerText);
});

//Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

const div = document.querySelector(".div");
div.addEventListener("click", (e) => {
  if (e.target.getAttribute("class") == "addedChild")
    console.log(e.target.textContent);
});

const child = document.querySelector(".child");
const secondChild = document.querySelector(".secondChild");
child.addEventListener("click", () => {
  const addChildElement = document.createElement("p");
  addChildElement.setAttribute("class", "addedChild");
  addChildElement.textContent = "added child";
  secondChild.appendChild(addChildElement);
});
