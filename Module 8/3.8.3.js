function createCities(html) {
  const tableRows = html.split("<table>")[1].split("</table>")[0].split("</tr>").join("").split("<tr>").slice(2);
  
  const cities = tableRows.map(row => row.split("</td>").join("").split("<td>")[2].toLowerCase().trim());

  const cityCount = {};
  cities.forEach(city => cityCount[city] = (cityCount[city] || 0) + 1);

  const result = {};
  for (const city in cityCount) {
    const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
    result[capitalizedCity] = cityCount[city];
  }

  return result;
}