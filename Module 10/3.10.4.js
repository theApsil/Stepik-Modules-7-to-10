let elementsP = document.getElementsByTagName('p');

for (let i = 0; i < elementsP.length; i++) {
  let items = elementsP[i].innerHTML.split(' ');
  elementsP[i].onclick = function() {
    let nextItem = parseInt(items[items.length - 2]) + parseInt(items[1]) - parseInt(items[0]);
    elementsP[i].innerHTML = elementsP[i].innerHTML.replace('&hellip;', nextItem + ' ' + (nextItem + parseInt(items[1]) - parseInt(items[0])) + ' ' + (nextItem + 2 * (parseInt(items[1]) - parseInt(items[0]))) + ' ' + (nextItem + 3 * (parseInt(items[1]) - parseInt(items[0]))) + ' &hellip;');
  };
}