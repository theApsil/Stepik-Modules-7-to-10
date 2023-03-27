function writeCitiesStat(html) {
  let cities = {};
  let tableStart = html.indexOf('<table>');
  let tableEnd = html.indexOf('</table>');
  let rows = html.slice(tableStart, tableEnd).split('</tr>');
  rows.pop(); 
  rows.slice(1).forEach(row => {
    let cells = row.split('</td>');
    let name = cells[0].slice(cells[0].indexOf('>') + 1).trim();
    let year = Number(cells[1].slice(cells[1].indexOf('>') + 1).trim());
    let city = cells[2].slice(cells[2].indexOf('>') + 1).trim().toLowerCase();
    city = city.charAt(0).toUpperCase() + city.slice(1);
    if (!(city in cities)) {
      cities[city] = {};
    }
    if (!(year in cities[city])) {
      cities[city][year] = 0;
    }
    cities[city][year]++;
  });
  let result = '';
  for (let city in cities) {
    result += '<p>' + city + ':</p><ul>';
    for (let year in cities[city]) {
      result += '<li>' + year + ' - ' + cities[city][year] + '</li>';
    }
    result += '</ul>';
  }
  return result;
}
