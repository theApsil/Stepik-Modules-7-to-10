function setClass(id) {
  const element = document.getElementById(id);
  const links = element.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    links[i].className = 'active';
  }
}
