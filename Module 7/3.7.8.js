function parseSrc(html) {
  const result = [];
  const imgTags = html.split("<img");

  for (let i = 1; i < imgTags.length; i++) {
    const tag = imgTags[i];
    const srcIndex = tag.indexOf("src");
    
    if (srcIndex !== -1) {
      const restOfTag = tag.slice(srcIndex);
      const firstQuoteIndex = restOfTag.indexOf('"');
      const secondQuoteIndex = restOfTag.indexOf("'", firstQuoteIndex + 1);
      const quoteIndex = secondQuoteIndex !== -1 ? secondQuoteIndex : firstQuoteIndex;
      const srcValue = restOfTag.slice(quoteIndex + 1).split(/[ '"]/)[0];
      result.push(srcValue);
    }
  }

  return result.filter(function (item, index) {
    return result.indexOf(item) === index;
  });
}
