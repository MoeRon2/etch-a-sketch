const container = document.querySelector("#container");

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const newRow = document.createElement("div");
        newRow.style.display = "flex";
        newRow.style.flex = "1";
        newRow.addEventListener("mouseover", function (event) {
            let target = event.target;
            target.style.backgroundColor = "green";
        });
        for (let j = 0; j < size; j++) {
            const newDiv = document.createElement("div");
            newDiv.style.border = "solid";
            newDiv.style.flex = "1";
            // newDiv.addEventListener("mouseover", () => newDiv.style.backgroundColor = "blue");
            newRow.appendChild(newDiv);
        }
        container.appendChild(newRow);
    }
}





createGrid(16);