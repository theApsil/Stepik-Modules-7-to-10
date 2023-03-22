function createTable(arr) {
    let sum = 0;
    arr.forEach(function(cell){
        sum += parseFloat(cell)
    });
    avg = parseFloat(sum / arr.length);
    
    let tableRow = "";
    const header = "<tr><td>Элемент</td><td>Разница</td></tr>";
    for (let i = 0; i < arr.length; i++){
        tableRow += `<tr><td>${arr[i]}</td><td>${Math.round((arr[i]-avg)*100)/100}</td></tr>`;
    }
    let res = "<table>";
    
    return res + header + tableRow + "</table>";
}