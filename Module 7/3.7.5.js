function delAllSpaces(str) {
  let arr =[];
  while(str.indexOf(' ') >= 0) {
    arr = str.split(' ');
    str = arr.join('');
  }
  return str;
}

function parseTable(html)
{
  let resArr = [];


  str = delAllSpaces(html);
  let arr = str.split("<table>");

  str = arr[1];
  arr = str.split("</table>");

  str = arr[0];
  arr = str.split("</tr>");

  for(let i=0; i < arr.length-1; i++)
  {
    list = arr[i].split("<tr>");
    str = list[1];

    list = str.split("</tr>");
    str = list[0];

    list = str.split("<td>");
    str = list.join("");

    list = str.split("</td>")

    summ = 0;
    for(let j=0;j<list.length-1;j++)
    {
    summ += +list[j];
    }
    summ = Math.round(summ * 100)/100;

    resArr.push(summ);
  }

  return resArr;
}