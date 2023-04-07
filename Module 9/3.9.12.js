function changeAttribute(links) {
  const anchors = document.getElementsByTagName("a");
  for (let anchor of anchors) {
    for (let key in links) {
      if (anchor.innerHTML.includes(key)) {
        anchor.setAttribute('href', links[key]);
      }
    }
  }
}
