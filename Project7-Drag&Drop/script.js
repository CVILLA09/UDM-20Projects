function drag(){

    let dragging = false;
    let mouseX, mouseY;
    let eleX, eleY;

    const boxes = document.querySelectorAll("[draggable]");

    boxes.forEach(box =>{
        box.addEventListener("mousedown", mouseDown);
        box.style.top = 0;
        box.style.left = 0;
    });

    function mouseDown(e){
        e.preventDefault();

        dragging = this;

        mouseX = e.clientX;
        mouseY = e.clientY;

        eleX = Number.parseInt(dragging.style.left);
        eleY = Number.parseInt(dragging.style.top);
        eleX = isNaN(eleX) ? 0 : eleX;
        eleY = isNaN(eleY) ? 0 : eleY;

        document.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseup", mouseUp);
    }

    function mouseMove(e){
        if(dragging){
            const deltaMouseX = e.clientX - mouseX;
            const deltaMouseY = e.clientY - mouseY;

            dragging.style.left = deltaMouseX + eleX + "px";
            dragging.style.top = deltaMouseY + eleY + "px";
        }
    }

    function mouseUp(e){
        dragging = false;
    }
}