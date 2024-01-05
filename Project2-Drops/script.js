const container = document.querySelector(".container");

function dropped() {
  
    const drop = document.createElement('span');

    drop.classList.add("drop");

    drop.style.top = Math.random() * innerHeight + "px";
    drop.style.left = Math.random() * innerWidth + "px";

    setTimeout(() => {
        drop.remove();
    }, 5000);

    container.appendChild(drop);

}

setInterval(dropped, 1000);