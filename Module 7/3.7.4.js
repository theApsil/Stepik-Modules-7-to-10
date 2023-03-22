function getLinks(html) {
  let result="";
  let subS = html;

  let helpArray = subS.split("<nav>");
  subS = helpArray[1];
  helpArray = subS.split("</nav>");
  subS = helpArray[0];

  helpArray = subS.split("</a>");

  for(let i=0; i<helpArray.length-1; i++)
  {
    list = helpArray[i].split('"');
    result += list[1] + " ";
  }

  return result;
}
