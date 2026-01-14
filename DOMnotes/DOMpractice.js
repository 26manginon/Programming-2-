const container = document.querySelector(".container");
//  The following would all work to call my "display" div:
//      div.display
//      .display 
//      .container > .display 
//      div.container > div.display 

//  Relational selector 
const display = container.firstElementChild;
console.log(display);


const controls = document.querySelector(".controls");
const display2 = controls.previousElementSibling;

//  Properties and Methods to work with DOM in javascript:
//  QUERY SELECTORS:
//      Element.querySelectors(selector) - returns a reference to the first match of selector 

const display3 = container.querySelector(".display");
console.log(display3);

const p = document.createElement("p");
p.textContent = "Here is my text";

controls.style.cssText = "color: darkgreen; background-color: blue"
p.setAttribute("style", "color: #FF69B4; background: yellow");

//  If you are accessing a kebab case CSS property like background color, you need to use either 
//      dot notation with camel case OR bracket notation as strings:
//  p.style.backgroundColor = "green";
//  p.style["background-color"] = "green";
//  p.style["backgroundColor"] = "green";

p.setAttribute("class", "text");
//      setAttribute will change a class that exists, or add a class if none exists
p.setAttribute("class", "paragraph");
//      p.setAttribute("class", "text paragraph");

console.log(p.getAttribute("class"));

// p.removeAttribute("class");

// console.log(p.getAttribute("class"));

//      In part, because classes can frequently hold multiple values, and set attirbute rewrites
//              the whole thing, it's frequently better to use class specific methods.

p.classList.add("text");
console.log(p.getAttribute("class"));
p.classList.add("wrongClass");
console.log(p.getAttribute("class"));
p.classList.remove("wrongClass");
console.log(p.getAttribute("class"));

p.classList.toggle("inactive");
console.log(p.getAttribute("class"));