


document.querySelector(".img1","img2").addEventListener("click",function(){
    var randomNumber= Math.floor(Math.random() * 6 + 1);
var randomImages= "dice"+randomNumber+".png";
var imageSource= "./images/"+randomImages;
var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",imageSource);

var randomNumber2= Math.floor(Math.random() * 6 + 1);
var randomImages2= "dice"+randomNumber2+".png";
var imageSource2= "./images/"+randomImages2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",imageSource2);


if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins";
}
 else if(randomNumber < randomNumber2) { 
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}

})

document.querySelector(".img2").addEventListener("click",function(){

var randomNumber2= Math.floor(Math.random() * 6 + 1);
var randomImages2= "dice"+randomNumber2+".png";
var imageSource2= "./images/"+randomImages2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",imageSource2);

var randomNumber= Math.floor(Math.random() * 6 + 1);
var randomImages= "dice"+randomNumber+".png";
var imageSource= "./images/"+randomImages;
var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",imageSource);



if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins";
}
 else if(randomNumber < randomNumber2) { 
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
})