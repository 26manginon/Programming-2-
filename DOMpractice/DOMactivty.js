const container = document.querySelector("#container"); 
const content = document.createElement("div"); 
content.classList.add("content"); 
content.textContent = "This is the glorious text-content!"; 
container.appendChild(content);

const p = document.createElement("p");
p.textContent = "Im red";
p.style.color = " #ff0011";    

const h3 = document.createElement("h3");
h3.textContent = " I’m a blue h3!";
h3.style.color = "blue";




