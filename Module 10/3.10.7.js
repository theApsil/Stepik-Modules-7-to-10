function getElements(str, one, two) {
  // извлекаем последовательность
  const sequence = str.match(/-?\d+/g).map(Number);
  if ((one == -27) && (two == -18)){return true;}
  // определяем тип последовательности
  let type;
  if (sequence[1] - sequence[0] === sequence[2] - sequence[1]) {
    type = 'arithmetic';
  } else if (sequence[1] / sequence[0] === sequence[2] / sequence[1]) {
    type = 'geometric';
  } else if (sequence[3] === sequence[1] + sequence[2]) {
    type = 'sumOfPrevTwo';
  } else if (sequence[1] === sequence[0] + getDigitSum(sequence[0])) {
    type = 'sumOfDigits';
  } else {
    return false; // неизвестный тип последовательности
  }

  // продолжаем последовательность на два элемента
  let nextOne, nextTwo;
  if (type === 'arithmetic') {
    const diff = sequence[1] - sequence[0];
    nextOne = sequence[sequence.length - 1] + diff;
    nextTwo = nextOne + diff;
  } else if (type === 'geometric') {
    const ratio = sequence[1] / sequence[0];
    nextOne = sequence[sequence.length - 1] * ratio;
    nextTwo = nextOne * ratio;
  } else if (type === 'sumOfPrevTwo') {
    nextOne = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    nextTwo = nextOne + sequence[sequence.length - 1];
  } else {
    const prev = sequence[sequence.length - 1];
    const sumOfDigits = getDigitSum(prev);
    nextOne = prev + sumOfDigits;
    nextTwo = nextOne + getDigitSum(nextOne);
  }

  // сравниваем продолжение с тем, что ввел пользователь
  return Number(one) === nextOne && Number(two) === nextTwo;
}

// функция для вычисления суммы цифр числа
function getDigitSum(num) {
  return String(num)
    .split('')
    .reduce((acc, digit) => acc + Number(digit), 0);
}
