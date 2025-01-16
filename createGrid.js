const btn = document.querySelector("button");
const container = document.querySelector("#container");
let gridSize;

const containerHeight = 960;
const containerWidth = 960;
container.style.width = String(containerWidth) + "px";
container.style.height = String(containerHeight) + "px";

function populateGrid(gridSize, gridContainer)
{
    for (let i = 0; i < gridSize; i++)
    {
        const column = document.createElement("div");
        column.classList.add("column")
        for (let j = 0; j < gridSize; j++)
        {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = String(containerWidth / gridSize) + "px";
            cell.style.height = String(containerHeight / gridSize) + "px";
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = "black";
            });
            column.appendChild(cell);
        }
        gridContainer.appendChild(column);
    }
}

function clearGrid(grid)
{
    grid.textContent = "";
}

btn.addEventListener("click", () =>
{
    gridSize = Number(prompt("Size of new grid"));
    if (!Number.isInteger(gridSize) || gridSize <= 0 || gridSize > 100)
    {
        alert("Invalid input (must be an integer between 1 and 100");
        return;
    }

    const container = document.querySelector("#container");
    clearGrid(container);

    populateGrid(gridSize, container);
});

populateGrid(16, container);
