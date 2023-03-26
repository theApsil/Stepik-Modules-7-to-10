function createNewArray(arr, arrColIndex) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const temp_arr = [];
    for (let j = 0; j < arrColIndex.length; j++) {
      temp_arr.push(arr[i][arrColIndex[j]]);
    }
    newArray.push(temp_arr);
  }

  return newArray;
}
