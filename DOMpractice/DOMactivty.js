const container = document.querySelector("#container"); 
const content = document.createElement("div"); 
content.classList.add("content"); 
content.textContent = "This is the glorious text-content!"; 
container.appendChild(content);


const p = document.createElement("p");
p.textContent = "Hey Im red";
p.style.color = "red";    
container.appendChild(p); 

const h3 = document.createElement("h3");
h3.textContent = " I am a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

const div = document.createElement("div");
div.setAttribute = ("style;", "border: 3px soild black;");
div.style.backgroundColor = "pink";
container.appendChild(div);

const insideH1 = document.createElement("h1");
insideH1.textContent = "Im in a div";
div.appendChild(insideH1);

const insideP = document.createElement("hi");
insideP.textContent = "Me too";
div.appendChild(insideP);







