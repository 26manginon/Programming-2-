//      Method 2 of clickable button, keeps HTML page clear of JS
// const btn = document.querySelector(".btn");
// btn.onClick = () => alert ("Hello World");

//      Method 3 - Event Listener
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
        alert("Holla Mundo!");
});

btn.addEventListener("click", () => {
        btn.style.color = "red";
})

btn.addEventListener("click", function(e) {
        console.log(e.target);
        e.target.style.background = "blue";
})