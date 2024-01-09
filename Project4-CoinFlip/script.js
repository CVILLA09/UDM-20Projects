const coin = document.querySelector("#coin");
const button = document.querySelector("#flip");
const statusLabel = document.querySelector("#status");
const heads = document.querySelector("#headsCount");
const tails = document.querySelector("#tailsCount");

let headsCount = 0;
let tailsCount = 0;

function processResult(result) {
    
    // Increment either headsCount or tailsCount
    if (result === "heads") {
        headsCount++;
        heads.innerHTML = headsCount;
    } else {
        tailsCount++;
        tails.innerHTML = tailsCount;
    }
    
    statusLabel.innerText = result.toUpperCase();
}

function flipCoin() {
    const random = Math.random();
    const result = random < 0.5 ? "heads" : "tails";

    setTimeout(function () {
        coin.setAttribute("class", "animate-" + result);

        setTimeout(function () {
            processResult(result);
        }, 2900);

    }, 100);
}

button.addEventListener("click", flipCoin);