function setClass(attrName, clName) {
  const elements = document.getElementsByTagName('*');
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].hasAttribute(attrName)) {
      elements[i].removeAttribute(attrName);
      elements[i].classList.add(clName);
    }
  }
}
