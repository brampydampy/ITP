// Accessing Element using getElementById()
let elementWithID = document.getElementById("first-div");
console.log("Element accessed using ID:", elementWithID);

// getElementsByClassName()
let elementsWithClass = document.getElementsByClassName("sample-div");
console.log("Elements with Class:", elementsWithClass);

// Indexing - from a collection of elements
console.log(elementsWithClass[0]);
console.log(elementsWithClass["second-div"]);

// getElementsByTagName()
let listItems = document.getElementsByTagName("li");
console.log("List Items:",listItems);

/* Query Selector */
// querySelector() - FIRST OCCURENCE
// # - id
// . - class
// * - universal selector
// h1 h2 p - grouping selector
// h1, h2, p - another way of accessing grouping selector
let orderedListItem = document.querySelector(".ordered-list");
console.log(orderedListItem);

let h3Child = document.querySelector("div h3");
console.log(h3Child);

// querySelectorAll() - ALL OCCURENCES
let headings = document.querySelectorAll("h3");
console.log("Heading Tags:", headings);

/* MANIPULATION */

// Textcontent
// em- emphasis (alternative to italics)
headings[0].textContent ="<em>New Heading!</em>"; // only add in plain text
headings[0].innerHTML = "<em>New Heading!</em>"; // can be used with html tags

// Update Attributes
headings[0].style.color="white";
headings[0].style.backgroundColor="black";
headings[0].style.padding="10px";

let dayNightIcon = document.querySelector("#day-night-icon");
dayNightIcon.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/3688/3688129.png");
//dayNightIcon.id = "new-id" (possible but bad practice);
dayNightIcon.getAttribute("src");


// Update Classes (and possibly ids)
listItems[0].classList.add("class1");
listItems[0].classList.remove("class1");
listItems[0].classList.toggle("class1"); //on
listItems[0].classList.toggle("class1"); //off
console.log(listItems[0].classList);

// Append New Elements
/* 
    1. Create Element
    2. Change attributes, text, and others for new element
    3. Append to an existing element
*/
let parentElement = document.querySelector("#parent-element");
let newElement = document.createElement("h4"); //create
newElement.textContent = "I am new!";// change text attribute
parentElement.appendChild(newElement); // append to an existing element in html

// Remove Elements
let elementToBeRemoved = document.querySelector("#element-to-be-removed");
elementToBeRemoved.remove();

/* EVENT LISTENERS */
let darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", () => {
    let pageContainer = document.querySelector("#page-container");
    let pageModeText = document.querySelector("#page-mode-text");

    // styling
    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "white";

    // text content
    pageModeText.textContent = "Dark Mode";
});


