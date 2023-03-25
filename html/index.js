var mainImage = document.querySelector(".home-bg");
//var imgText = document.querySelector("#img-text");
var temp = document.querySelector("#img-text");
temp.style.display = "block";
mainImage.addEventListener("mouseout",mouseOutHandler);
mainImage.addEventListener("mouseover",mouseOverHandler);

function mouseOverHandler(){
    console.log("hello");
    temp.style.display = "block";
}

function mouseOutHandler(){
    console.log("bye");
    temp.style.display = "none";
}


