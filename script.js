let coin = document.querySelector("#coin");
let flipBtn = document.querySelector("#flip-button");

let headScore = 0;
let tailScore = 0;

//tail: #4CC9F0
//head : #7209B7

const updateScore = () => {
    setTimeout(() => {
        let headPlayer = document.querySelector("#headPlayer");
        let tailPlayer = document.querySelector("#tailPlayer");

        headPlayer.innerHTML = `Heads: <b>${headScore}</b>`;
        tailPlayer.innerHTML = `Tails: <b>${tailScore}</b>`;
    }, 60);
}

const playGame = () => {
    // setInterval & setTimeout: https://chatgpt.com/share/8f6d79fa-a631-4d4f-9813-7fc7ba81148b

    let flipCoins = setInterval(() => {

        if (coin.innerText === "HEADS") {
            coin.innerText = "TAILS";
            coin.style.backgroundColor = "black";
            coin.style.outlineColor = "black";
        }
        else {
            coin.innerText = "HEADS";
            coin.style.backgroundColor = "#7209B7";
            coin.style.outlineColor = "#7209B7";
        }
    }, 60);

    coin.classList.add("flip-up");

    setTimeout(() => {
        coin.classList.remove("flip-up");
        coin.classList.add("flip-down");

        setTimeout(() => {
            coin.classList.remove("flip-down");
            clearInterval(flipCoins);

            let result = Math.random() > 0.5 ? "HEADS" : "TAILS";

            if (result === "HEADS") {
                coin.innerText = "HEADS";
                coin.style.backgroundColor = "#7209B7";
                coin.style.outlineColor = "#7209B7";
                headScore++;
            }
            else {
                coin.innerText = "TAILS";
                coin.style.backgroundColor = "black";
                coin.style.outlineColor = "black";
                tailScore++;
            }

            updateScore();


        }, 600);

    }, 600);
};

coin.addEventListener("click", playGame);
flipBtn.addEventListener("click", playGame);
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
        playGame();
    }
});
