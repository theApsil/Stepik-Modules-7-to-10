function printStatInfo(idElement)
{
    let element = document.getElementById(idElement);

    parent = element.parentElement.nodeName;
    lSibling = (element.previousElementSibling === null)? "нет" : element.previousElementSibling.nodeName;
    rSibling = (element.nextElementSibling === null)? "нет" : element.nextElementSibling.nodeName;
    children = (element.children === null)? 0 : element.children.length;

    result = `Родитель: ${parent}
Соседи: слева - ${lSibling}, справа - ${rSibling}
Количество детей: ${children}`;

    if (element.children.length != 0)
    {
    firstChild = element.firstElementChild.nodeName;
    lastChild = element.lastElementChild.nodeName;

    result += `\nДети: первый - ${firstChild}, последний - ${lastChild}`;
    }

    alert(result);
}