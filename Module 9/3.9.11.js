function setNewProperty(tag) {
  const arrTags = document.getElementsByTagName(tag.toUpperCase());
  
  const getInfo = function() {
    const parent = this.parentElement.nodeName;
    const lSibling = (this.previousElementSibling === null) ? "нет" : this.previousElementSibling.nodeName;
    const rSibling = (this.nextElementSibling === null) ? "нет" : this.nextElementSibling.nodeName;
    const children = (this.children === null) ? 0 : this.children.length;

    let result = `Родитель: ${parent}\nСоседи: слева - ${lSibling}, справа - ${rSibling}\nКоличество детей: ${children}`;

    if (children > 0) {
      const firstChild = this.firstElementChild.nodeName;
      const lastChild = this.lastElementChild.nodeName;

      result += `\nДети: первый - ${firstChild}, последний - ${lastChild}`;
    }

    return result;
  };

  for (let i = 0; i < arrTags.length; i++) {
    arrTags[i].getInfo = getInfo;
  }
}
