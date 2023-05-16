let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

//declaring varaible for score.
let interval = null;
let playerScore = 0;

//function for score.
let scoreCounter = ()=>{
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}

//start game
window.addEventListener("keydown", (start) => {
    if (start.code == "Space") {
        gameOver.style.display = "none";
        block.classList.add("blockActive");
        road.classList.add("roadActive");
        cloud.classList.add("cloudActive");

        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});

//jumping of dino.
window.addEventListener("keydown", (e)=>{
    if (e.key == "ArrowUp") {
        if (dino.classList != "dinoActive") {
            dino.classList.add("dinoActive");

            //remove class after 0.5s
            setTimeout(()=>{
                dino.classList.remove("dinoActive");
            }, 500);
        }
    }
});

//gameOver if dino hits the block.
let result = setInterval(()=>{
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));

    if (dinoBottom >= 28 && dinoBottom <= 108 && blockLeft >= 20 && blockLeft <= 90) {
        gameOver.style.display = "block";
        block.classList.remove("blockActive");
        cloud.classList.remove("cloudActive");
        road.classList.remove("roadActive");
        clearInterval(interval);
        playerScore = 0;
    }
}, 10);