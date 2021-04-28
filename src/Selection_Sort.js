/**
 * Time complexity: O(n^2)
 * @param {Array<Number>} arr
 * @returns Array
 */
const SelectionSort = (arr) => {
  const result = [...arr];
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (result[minIndex] > result[j]) minIndex = j;
    }
    [result[minIndex], result[i]] = [result[i], result[minIndex]];
  }
  return result;
};
