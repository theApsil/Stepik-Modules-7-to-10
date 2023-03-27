function writeArrObjects(arr) {
  let result = "[";
  for (let i = 0; i < arr.length; i++) {
    result += "{<br>";
    const obj = arr[i];
    for (const key in obj) {
      result += "&nbsp;&nbsp;" + key + ": " + obj[key] + "<br>";
    }
    result += "},<br>";
  }
  result = result.slice(0, -5) + "]";
  return result;
}