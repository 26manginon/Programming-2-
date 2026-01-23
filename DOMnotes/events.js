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

//      If you have a function that you want to execute when multiple kinds of events happen
//              then you should name the function.

//      If I want to attach event listeners to a lot of similar elements I can do so by 
//              applying arrays.

const buttons = document.querySelectorAll("button");
console.log(buttons);

//      .forEach is an array method that will apply the same instructions to each item in the array: 

buttons.forEach((button) => {
        //add a click event listener
        button.addEventListener("click", () =>{
                alert(button.className);
        });
});

//      If I only want button two to do something I can do this:
const two = document.querySelector(".two");

two.addEventListener("click", () => {
two.style.color = "green";
})


//      mousedown - fires when you press the mouse button on an element
//      mouseup - fires when you release the mouse button on an element
//      click - fires when one mousedown and one mouseup detected on the same element 


const three = document.querySelector(".three");

three.addEventListener("contextmenu", (e) => {
        e.preventDefault();
});

three.addEventListener("mouseup", (e) => {
        console.log(e.button);
        if (e.shiftKey){
                console.log("shift");
        }
});

let track = document.querySelector(".track")
track.addEventListener("mousemove" , (e) => {
        let log = document.querySelector(".log");
        log.innerText = `
        Screen X/Y (${e.screenX}), ${e.screenY})
        Client X/Y (${e.clientX}), ${e.clientY})`
});

//      Keydown (fire when you press a key on the keyboard  and fires repeatedly as long as you're holding down the key.)
//      Key Press (fires when you press a character keyboard like 'a' 'b' '2', but not an < > key , or "home")
//      When you press a character key on your keyboard, the following happens:
//      1. keydown
//      2. keypress
//      3. keyup 

let textBox = document.querySelector('.message');
textBox.addEventListener('keydown', (e) => {
        console.log(`key =${e.key}, code = ${e.code}`)
});

//      Standard approach:

// let home = document.querySelector('#home');
// home.addEventListener('click', (e) => {
//         console.log('Home menu item clicked')
// });

// let dashboard = document.querySelector('#dashboard');
//// dashboard.addEventListener('click', (e) => {
//         console.log('Dashboard menu item clicked')
// });

// let= document.querySelector('#report');
// report.addEventListener('click', (e) => {
//         console.log('Report menu item clicked')
// });

//      Better Approach - Event bubbling

// let menu = document.querySelector("#menu");

document.addEventListener("click", (e) => {
        let target = e.target;

        switch(target.id){
                case "home":
                        console.log("Home menu item selected");
                        break;
                case "dashboard":
                        console.log("Dashboard menu item selected");
                        break;
                case "report":
                        console.log("Report menu item selected");
                        break;
        }
});


//      Custom Events:

// function highlight(elem) {
//         elem.style.backgroundColor = "yellow";
// }

//      Next we use a callback. A callback, is a function that is the input of another function 

function highlight(elem, callback) {
        elem.style.backgroundColor = "yellow";

        if(callback && typeof callback === "function") {
                callback(elem);
        }
}

let menuItem = document.querySelector(".menuItem");
function addBorder(elem){
        elem.style.border = "solid 1px red";
} 

highlight(menuItem, addBorder);

//      let event = new CustomEvent(eventType, options);
//      eventType:      Name of new event
//      options:        has the "detail" proprety that contains any custom information aboutk

function highlight(elem) {
        elem.style.backgroundColor = "yellow";

let event = new CustomEvent("mark",{
        detail: {backgroundColor: "yellow"}
});
}
