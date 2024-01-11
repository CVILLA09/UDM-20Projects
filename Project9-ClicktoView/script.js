const h = document.getElementById("h");
const e = document.getElementById("e");
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const o = document.getElementById("o");
const hello = document.getElementById("complete");

h.addEventListener("click", () => {
    h.style.display = "none";
    e.style.display = "block";
});

e.addEventListener("click", () => {
    e.style.display = "none";
    l1.style.display = "block";
});

l1.addEventListener("click", () => {
    l1.style.display = "none";
    l2.style.display = "block";
});

l2.addEventListener("click", () => {
    l2.style.display = "none";
    o.style.display = "block";
});

o.addEventListener("click", () => {
    o.style.display = "none";
    exclamation.style.display = "block";
});

exclamation.addEventListener("click", () => {
    exclamation.style.display = "none";
    hello.style.display = "block";
});

hello.addEventListener("click", () => { 
    hello.style.display = "none";
    h.style.display = "block";
});
