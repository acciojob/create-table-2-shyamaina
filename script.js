
function createTable() {
    const rn = prompt("Input number of rows");
    const cn = prompt("Input number of columns");

    if (
        rn === null || cn === null ||
        rn.trim() === "" || cn.trim() === "" ||
        !Number.isInteger(Number(rn)) ||
        !Number.isInteger(Number(cn))
    ) {
        return;
    }

    const rows = Number(rn);
    const columns = Number(cn);

    if (rows <= 0 || columns <= 0) {
        alert("Please enter positive numbers.");
        return;
    }

    const table = document.getElementById("myTable");
    table.innerHTML = "";

    for (let i = 0; i < rows; i++) {
        const row = table.insertRow();

        for (let j = 0; j < columns; j++) {
            const cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
