function mergeSort (unsortedArray) {
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    const middle = Math.floor(unsortedArray.length / 2);
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);
    return mergeSort(left), mergeSort(right);
  }
  var array =[3, 0, 2, 5, -1, 4, 1];
  console.log( mergeSort(array))