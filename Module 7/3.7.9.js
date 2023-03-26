function createDistinctTable(html) {
  let str = html;
  let arr = str.split("<table>");
  str = arr[1];
  arr = str.split("</table>");
  str = arr[0];
  arr = str.split("</tr>");
  arr.pop();

  let result = [];
  let head = [];

  for (let i = 0; i < arr.length; i++) {
    const list = arr[i].split("<tr>");
    str = list[1];
    const list2 = str.split("</tr>");
    str = list2[0];
    const list3 = str.split("<td>");
    str = list3.join("");
    const list4 = str.split("</td>");
    list4.pop();

    if (i === 0) {
      head = list4;
    } else {
      for (let j = 0; j < list4.length; j++) {
        if (result.indexOf(list4[j]) === -1) {
          result.push(list4[j]);
        }
      }
    }
  }

  result.sort(function (a, b) {
    return +b - +a;
  });

  let rows = "";
  for (let i = 0; i < result.length; i++) {
    rows += "<tr><td>" + result[i] + "</td></tr>";
  }

  let headRow = "<tr>";
  for (let i = 0; i < head.length; i++) {
    headRow += "<td>" + head[i] + "</td>";
  }
  headRow += "</tr>";

  const str_html = "<table>" + headRow + rows + "</table>";
  return str_html;
}
