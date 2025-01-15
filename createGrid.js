const container = document.querySelector("#container");

for (let i = 0; i < 16; i++)
{
    const column = document.createElement("div");
    column.tags = "column";
    for (let j = 0; j < 16; j++)
    {
        const cell = document.createElement("div");
        column.appendChild(cell);
    }
    container.appendChild(column);
}