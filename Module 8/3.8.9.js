function getWordWithoutNumbers(str) {
  return str.replace(/\d+/g, '');
}

books.print = function(...args) {
  const invalidFields = args.filter(arg => !(arg in this));

  if (invalidFields.length > 0) {
    return "Ошибка в названии поля";
  }

  const keys = args.length === 0 ? Object.keys(this) : args;
  const myBooks = {};

  keys.forEach(key => {
    if (!(key in myBooks)) {
      myBooks[key] = this[key];
    } else {
      myBooks[`${key}1`] = this[key];
    }
  });

  myBooks.print = function() {
    const headers = Object.keys(this).filter(key => typeof this[key] !== 'function');
    let html = '<table><tr>';

    headers.forEach(header => {
      html += `<th>${getWordWithoutNumbers(header)}</th>`;
    });

    html += '</tr>';

    for (let i = 0; i < this[keys[0]].length; i++) {
      html += '<tr>';

      headers.forEach(header => {
        html += `<td>${this[header][i]}</td>`;
      });

      html += '</tr>';
    }

    return html + '</table>';
  }

  return myBooks.print();
};
