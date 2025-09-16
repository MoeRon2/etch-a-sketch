const body = document.querySelector("body");
let container = document.querySelector("#container");

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        newRow.addEventListener("mouseover", function (event) {
            let target = event.target;
            // 
            target.style.backgroundColor = getRandomColor();;
        });
        for (let j = 0; j < size; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("newDiv");
            newRow.appendChild(newDiv);
        }
        container.appendChild(newRow);
    }
}


function getInput(size) {
    container.innerHTML = "";
    let input = -1;
    do {
        input = parseInt(prompt("Size of grid"));
    } while (input < 0 || input > 100);


    createNewContainer();
    body.appendChild(container);
    createGrid(input);
}

const changeSizeButton = document.querySelector("#changeSizeButton");
changeSizeButton.addEventListener("click", getInput);


function createNewContainer() {
    container.remove();
    container = document.createElement("div");
    container.setAttribute("id", "container");
}

function getRandomColor() {


    const red = getRandomInt(255);
    const green = getRandomInt(255);
    const blue = getRandomInt(255);

    return `rgb(${red}, ${green}, ${blue})`;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
createGrid(64);