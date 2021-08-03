
var random = Math.floor(Math.random()*6)+1;
var random2 = Math.floor(Math.random()*6)+1;
var newString = "dice"+random+".png";
var newString2 = "dice"+random2+".png";

var newSrc = "images/"+newString;
var newSrc2 = "images/"+newString2;

document.querySelectorAll("img")[0].setAttribute("src", newSrc);
document.querySelectorAll("img")[1].setAttribute("src", newSrc2);

if(random<random2){
    document.querySelector("h1").innerHTML = "Player 2 Win";
}else if(random>random2){
    document.querySelector("h1").innerHTML = "Player 1 Win";
}else{
    document.querySelector("h1").innerHTML = "Draw";

}