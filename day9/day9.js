//Day 9: DOM Manipulation

//Activity 1: Selecting and Manipulating Elements

//Task 1: Select an HTML element by its ID and change its text content.

const text = document.querySelector("#text");

text.textContent = "Hi! Task 1 is completed";

//Task 2: Select an HTML element by its class and change its background color.

const bgChange = document.getElementsByClassName("bgChange");

bgChange[0].style.backgroundColor = "pink";

//Activity 2: Creating and Appending Elements

//Task 3: Create a new div element with some text content and append it to the body.

const newDiv = document.createElement("div");

newDiv.textContent = "YEllOW";

document.body.appendChild(newDiv);

//Task 4: Create a new li element and add it to an existing ul list;

const unorderedList = document.querySelector(".list");
const listItem = document.createElement("li");
listItem.textContent = "Dosa";
unorderedList.appendChild(listItem);

//Activity 3: Removing Elements

//Task 5: Select an HTML element and remove it from the DOM.

const removeDiv = document.querySelector("div");
if (removeDiv) {
  removeDiv.remove();
}

//Task 6:  Remove the last child of a specific HTML element.
unorderedList.lastElementChild.remove();

//Activity 4: Modifying Attributes and Classes

//Task 7: Select an HTML element and change one of its attributes (e.g., src of img tag).
const task7 = document.querySelector(".task7");

task7.setAttribute("style", "border: 2px solidred");

//Task 8:  Add and remove a CSS class to/from an HTML element.

const element = document.querySelector("#changeCss");
if (element) {
  element.setAttribute("class", "classCSS");
}
setTimeout(() => {
  element.removeAttribute("class");
}, 3000);

//Activity 5: Event Handling

//Task 9: Add a click event listener to a button that changes the text content of a paragraph.

const button = document.querySelector("#button");
button.addEventListener("click", () => {
  bgChange[0].textContent = "The whole text has changed now";
});

//Task 10:  Add a mouseover event listener to an element that changes its border color.

const mouseEvent = document.querySelector(".mouse");
mouseEvent.addEventListener("mouseover", () => {
  mouseEvent.style.borderColor = "cyan";
});
