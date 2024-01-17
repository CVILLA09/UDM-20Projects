const body = document.body;
const range = document.getElementById("_range");
const number = document.getElementById("rangeValue");

function updateStyle() {

    const value = Number(number.innerText);

    if (value >= 95) {
        applyStyles('white', '#FF0000');
    } else if (value >= 90) {
        applyStyles('white', '#FF6600');
    } else if (value >= 85) {
        applyStyles('yellow', '#FFCC00');
    } else if (value >= 80) {
        applyStyles('yellow', '#99FF00');
    } else if (value >= 75) {
        applyStyles('yellow', '#00FF66');
    } else if (value >= 70) {
        applyStyles('gray', '#00FFFF');
    } else if (value >= 65) {
        applyStyles('gray', '#0066FF');
    } else if (value >= 60) {
        applyStyles('gray', '#6600FF');
    } else if (value >= 55) {
        applyStyles('black', '#CC00FF');
    } else if (value >= 50) {
        applyStyles('black', '#FF00CC');
    } else if (value >= 45) {
        applyStyles('black', '#FF0099');
    } else if (value >= 40) {
        applyStyles('purple', '#FF0066');
    } else if (value >= 35) {
        applyStyles('purple', '#FF0033');
    } else if (value >= 30) {
        applyStyles('purple', '#FF3300');
    } else if (value >= 25) {
        applyStyles('orange', '#FF6600');
    } else if (value >= 20) {
        applyStyles('orange', '#FF9900');
    } else if (value >= 15) {
        applyStyles('orange', '#FFCC00');
    } else if (value >= 10) {
        applyStyles('red', '#FFFF00');
    } else if (value >= 5) {
        applyStyles('red', '#CCFF00');
    } else if (value === 0) {
        applyStyles('red', '#FF00CC');
    }           

}

function applyStyles(color, backgroundColor) {
    number.style.color = color;
    body.style.backgroundColor = backgroundColor;
}

range.addEventListener("input", function() {    
    
    const sliderValue = Math.min(this.value,100);
    number.innerText = sliderValue;

    updateStyle();
});
