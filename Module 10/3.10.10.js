function validateNumber(num, task) {
  if (isNaN(parseFloat(num)) || !isFinite(num) || +num % 1 !== 0 || +num <= 1) {
    return "Ошибочное число";
  }

  const number = +num;

  let numDesc;

  switch (task) {
    case '0':
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          numDesc = "составное число";
          break;
        }
      }
      numDesc = numDesc || "простое число";
      break;

    case '1':
      numDesc = (Math.sqrt(number) % 1 !== 0) ? "не квадрат числа" : "квадрат числа";
      break;

    case '2':
      let sum = 0;
      for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
          sum += i;
        }
      }

      numDesc = (sum === number) ? "совершенное число" : "несовершенное число";
      break;

    default:
      return "Некорректная задача";
  }

  return `${number} - ${numDesc}`;
}
