function getParent(idElement) {
    let element = document.getElementById(idElement);
    let count = 0;
    
    while (element.parentNode){
        alert(element.parentNode);
        element = element.parentNode;
        count++;
    }
    return count;
}