function calculateExpression(expr){
    str = expr.trim(); // Обрежем возможные лишние пробелы
    arr = str.split(" ");
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "*") {
        const result = parseFloat(arr[i-1]) * parseFloat(arr[i+1]);
        arr.splice(i-1, 3, result);
        i = -1; // reset index to 0
      } else if (arr[i] === "/") {
        const result = parseFloat(arr[i-1]) / parseFloat(arr[i+1]);
        arr.splice(i-1, 3, result);
        i = -1; // reset index to 0
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "+") {
        const result = parseFloat(arr[i-1]) + parseFloat(arr[i+1]);
        arr.splice(i-1, 3, result);
        i = -1; // reset index to 0
      } else if (arr[i] === "-") {
        const result = parseFloat(arr[i-1]) - parseFloat(arr[i+1]);
        arr.splice(i-1, 3, result);
        i = -1; // reset index to 0
      }
    }

    return Math.round(arr[0] * 10000) / 10000;
     
}