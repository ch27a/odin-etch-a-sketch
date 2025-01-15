const container = document.querySelector("#container");
const rowNumber = 16;
const columnNumber = 16;

const containerHeight = 960;
const containerWidth = 960;
container.style.width = String(containerWidth) + "px";
container.style.height = String(containerHeight) + "px";

for (let i = 0; i < columnNumber; i++)
{
    const column = document.createElement("div");
    column.classList.add("column")
    for (let j = 0; j < rowNumber; j++)
    {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = String(containerWidth / columnNumber) + "px";
        cell.style.height = String(containerHeight / rowNumber) + "px";
        column.appendChild(cell);
    }
    container.appendChild(column);
}