const sketchBox = document.querySelector(".sketch-box");
initialize();

function initialize() {
    const changeButton = document.querySelector(".btn-change");
    changeButton.addEventListener("click", requestNewGrid);

    const resetButton = document.querySelector(".btn-reset");
    resetButton.addEventListener("click", resetGrid);

    makeNewGrid(70);
    addEventsToGrid();
}

function removeOldGrid() {
    let oldGrid = document.querySelectorAll(".sketch-box div");
    oldGrid.forEach((item) => sketchBox.removeChild(item));
}

function makeNewGrid(size) {
    sketchBox.style.setProperty(
        "grid-template-columns",
        `repeat(${size}, 1fr)`
    );
    sketchBox.setAttribute("grid-template-rows", `repeat(${size}, 1fr)`);

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        sketchBox.appendChild(div);
    }
}

function addEventsToGrid() {
    let grid = document.querySelectorAll(".sketch-box div");
    grid.forEach((item) => {
        item.addEventListener("mouseover", activateSquare);
    });
}

function activateSquare(e) {
    this.style.background = "black";
}

function requestNewGrid() {
    let size = +prompt("What size would you like your next grid?", "16");
    if (isNaN(size) || size == 0) return;
    removeOldGrid();
    makeNewGrid(size);
    addEventsToGrid();
}

function resetGrid() {
    let grid = document.querySelectorAll(".sketch-box div");
    grid.forEach((item) => {
        item.style.background = "rgba(0, 0, 0, 0.025)";
    });
}
