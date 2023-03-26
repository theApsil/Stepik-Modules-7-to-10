let str = prompt("Введите последовательность:");
let num = prompt("Введите число:");

let arr = str.split(" ");

const filteredArr = arr.filter((el) => +el > +num);
if (filteredArr.length === arr.length) {
  document.write("Из последовательности ничего не удалено");
} else if (filteredArr.length === 0) {
  document.write("Все числа последовательности удалены");
} else {
  document.write(filteredArr.join(" "));
}


