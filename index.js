function refresh(){
var temp1 = Math.floor(Math.random()*6);
var rand1 = temp1 + 1;
switch(rand1){
    case 1:
        document.querySelectorAll("img")[0].setAttribute("src","./images/dice1.png");
        break;
    case 2:
        document.querySelectorAll("img")[0].setAttribute("src","./images/dice2.png");
        break;
    case 3:
        document.querySelectorAll("img")[0].setAttribute("src","./images/dice3.png");
        break;
    case 4:
        document.querySelectorAll("img")[0].setAttribute("src","./images/dice4.png");
        break;
    case 5:
        document.querySelectorAll("img")[0].setAttribute("src","./images/dice5.png");
        break;
    case 6:
        document.querySelectorAll("img")[0].setAttribute("src","./images/dice6.png");
        break;  
    }

var temp2 = Math.floor(Math.random()*6);
var rand2 = temp2 + 1;
switch(rand2){
    case 1:
        document.querySelectorAll("img")[1].setAttribute("src","./images/dice1.png");
        break;
    case 2:
        document.querySelectorAll("img")[1].setAttribute("src","./images/dice2.png");
        break;
    case 3:
        document.querySelectorAll("img")[1].setAttribute("src","./images/dice3.png");
        break;
    case 4:
        document.querySelectorAll("img")[1].setAttribute("src","./images/dice4.png");
        break;
    case 5:
        document.querySelectorAll("img")[1].setAttribute("src","./images/dice5.png");
        break;
    case 6:
        document.querySelectorAll("img")[1].setAttribute("src","./images/dice6.png");
        break;  
    }

if (rand1===rand2) {
    document.querySelector("h1").innerHTML="Draw!";
}
else if(rand1>rand2){
    document.querySelector("h1").innerHTML="&#128681 Player 1 WINS";   
}
else
    document.querySelector("h1").innerHTML="Player 2 WINS &#128681";
}  