const body = document.body;
const range = document.getElementById("_range");
const number = document.getElementById("rangeValue");

function updateStyle() {

    const value = Number(number.innerText);

    if (value >= 90) {
        applyStyles('white', '#FF0000');
    } else if (value >= 80) {
        applyStyles('#111', '#FF6600');
    } else if (value >= 70) {
        applyStyles('#222', '#FFCC00');
    } else if (value >= 60) {
        applyStyles('#333', '#99FF00');
    } else if (value >= 50) {
        applyStyles('#444', '#00FF66');
    } else if (value >= 40) {
        applyStyles('#555', '#00FFFF');
    } else if (value >= 30) {
        applyStyles('#666', '#0066FF');
    } else if (value >= 20) {
        applyStyles('#777', '#6600FF');
    } else if (value >= 10) {
        applyStyles('#888', '#CC00FF');
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
