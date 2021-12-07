//Create twoo elements p to HTML document


//Create the const

const txt1 = document.createElement("p");
const txt2 = document.createElement("p");

txt1.textContent = " First element";
txt2.textContent = "Second Element";

//Obtein the element div of HTLML document
//Insert the elements in to DOOM


document.getElementById("mainDiv")
    .prepend(txt1);

document.getElementById("mainDiv")
    .appendChild(txt2);

//Obtein the button element from HTML Document

const button = document.getElementById("button");

button.addEventListener("click", changeColor);

//Create the listener and the funtion for make the change of blacgroung

function changeColor(e) {

    console.log(e.target);

    const body = document.getElementById("body");
    body.classList.toggle("background");

}


