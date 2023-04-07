function hideElements(idElement)
{
    let element = document.getElementById(idElement);

    if (element.children.length == 0) {
        element.innerHTML = `&#128504;${element.innerHTML}`;
    }

    arrElements = document.getElementsByTagName(element.nodeName);

    for (let i = 0; i < arrElements.length; i++)
    {
        rightSibling = arrElements[i].nextElementSibling;
        if (rightSibling !== null)
            rightSibling.hidden = true;
    }
}