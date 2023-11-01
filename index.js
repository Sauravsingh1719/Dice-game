document.querySelector("button").addEventListener("click", handleclick);

function handleclick(){

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2){
    document.querySelector(".Win").innerHTML = "Player 1 wins";
}else if(randomNumber2 > randomNumber1){
    document.querySelector(".Win").innerHTML = "Player 2 wins";
}else {
    document.querySelector(".Win").innerHTML = "It's a Draw."
}
}
