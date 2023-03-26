function getGoodsGroup(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const name = arr[i][0].toLowerCase();
    const count = Number(arr[i][1]);
    const price = count * Number(arr[i][2]);

    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j][0].toLowerCase() === name) {
        result[j][1] += count;
        result[j][2] += price;
        found = true;
        break;
      }
    }

    if (!found) {
      result.push([name, count, price]);
    }
  }

  result.forEach((item) => {
    item[2] = Math.round(item[2] * 100) / 100;
  });

  result.sort();
  return result;
}
