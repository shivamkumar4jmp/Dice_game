var aNumber =Math.floor(Math.random()*6)+1;
var randomImage = "images/dice"+aNumber+".png";
var imageSource = document.querySelectorAll("img")[0];
imageSource.setAttribute("src", randomImage);


var aNumber2 =Math.floor(Math.random()*6)+1;
var randomImage2 = "images/dice"+aNumber2+".png";
var imageSource2 = document.querySelectorAll("img")[1];
imageSource2.setAttribute("src", randomImage2);


if(aNumber > aNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}
else if(aNumber === aNumber2){
    document.querySelector("h1").innerHTML = "Match Draw"
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}