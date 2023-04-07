books.getDistinct = function(field) {
  if (!(field in this)) {
    return "Ошибка в названии поля";
  }

  const arr = this[field];
  const distinctArr = [...new Set(arr)];

  return distinctArr;
};
