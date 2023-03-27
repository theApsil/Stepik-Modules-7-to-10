function delAllSpaces(str) {
    let arr =[];
    while(str.indexOf(' ') >= 0) {
        arr = str.split(' ');
        str = arr.join('');
    }
    return str;
}
function getItem(html)
    {
    str = delAllSpaces(html);

    rows = str.split("<table>")[1].split("</table>")[0].split("</tr>");
    rows.pop();

    keys = [];
    columns = rows[0];

    accum = "";
    flagTag = false;
    for(let i in columns)
    {
        curChar = columns[i];
        if (curChar == "<") flagTag = true;

        if (flagTag) accum += curChar;

        if (curChar == ">")
        {
            if(accum.indexOf("</th>") != -1)
        {
            temp = accum.split("<th>")[1].split("</th>")[0];
            keys.push(temp);
            flagTag = false;
            accum = "";
        }
        if(accum.indexOf("<th>") == -1)
        {
            flagTag = false;
            accum = "";
            }
        }
    }

    rows.shift();

    rows = rows[0].split("</td>").join("").split("<td>");
    rows.shift();

    let object = {}
    for(let i = 0; i < rows.length; i++)
    {
        object[keys[i]] = rows[i];
    }

    return object;
}