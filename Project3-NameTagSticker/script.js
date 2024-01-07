let wrapper = document.getElementsByClassName("wrapper")[0];
let template = document.getElementsByTagName("template")[0];

let names = ["John", "Jane", "Jack"];

let colors = [
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#800000",
    "#808000", "#FFA500", "#FFD700", "#6B8E23", "#7CFC00", "#000080", "#808080",
    "#FF00FF", "#FFA460", "#FF3855", "#FD3A4A", "#FB4D46", "#FA5B3D", "#FFAA1D",
    "#FFF700", "#299617", "#A7F432", "#2243B6", "#5DADec", "#5946B2", "#9C51B6"
];

let sticker = function (name){

    let div = template.content.querySelector("div");
    let nameOfStick = div.querySelector(".name");

    nameOfStick.innerHTML = name;

    div.style.background = colors[Math.floor(Math.random() * colors.length)];

    div.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";

    let node = document.importNode(div, true);
    wrapper.appendChild(node);
}

setTimeout(refreshPage, 1000);
function refreshPage() {
    location.reload();
}

names.forEach(sticker);