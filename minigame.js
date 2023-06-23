let curreMoleTile;
let currePlantTile;

let score = 0;
let gameOver = false;


window.onload = function(){
    setGame();
 }

function setGame(){
    for (let i=0; i < 9; i++){
        let tile = document.createElement("div")
        tile.id = i.toString();
        tile.addEventListener("click", selctTile);
        document.getElementById("board").appendChild(tile);
    }
    
        setInterval(setMole, 700);
        setInterval(setPlant, 1400);
};

function getRandomTile(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}


function setMole(){
    if(gameOver){
        return;
    };
    if(curreMoleTile){
        curreMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img")
    mole.src = "jjjj.png";

    let num = getRandomTile();
    if(currePlantTile && currePlantTile.id == num ){
        return;
    }
    curreMoleTile = document.getElementById(num);
    curreMoleTile.appendChild(mole)
};

function setPlant(){

    if(gameOver){
        return;
    };

    if(currePlantTile){
        currePlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "ffff.png"

    let num = getRandomTile();

    if(curreMoleTile && curreMoleTile.id == num){
        return;
    }
    currePlantTile = document.getElementById(num);
    currePlantTile.appendChild(plant)
}

function selctTile(){

    if(gameOver){
        return;
    }
    if(this == curreMoleTile ){
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }else if(this == currePlantTile ){
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver=true;
    }
}

