let gameContainer = document.getElementById("gameContainer");
let gameoverContainer = document.getElementById("gameoverContainer");
let puzo = document.getElementsByTagName("svg");

let puzoSize = 30;
let score = 0;
let isGameover = 0;

function feed() {
    puzoSize+=1.3;
}

function end() {
    isGameover = true;
}


setInterval(()=>{
    if (!isGameover) {
        
    
    let scoreTabs = document.getElementsByClassName("score");
    for (let i of scoreTabs) {
        i.innerHTML = score;
    }

    if (puzoSize < 20 || puzoSize > 40 ) {
        isGameover = true;
    }

    puzo[0].style.width = ((puzoSize + 50) + "%");

    puzoSize-=0.01;
    } else {
        gameContainer.style.display = "none";
        gameoverContainer.style.display = "block";
    }
}, 1);

setInterval(()=>{
    if (!isGameover) {
        score++;
    }
}, 1000);