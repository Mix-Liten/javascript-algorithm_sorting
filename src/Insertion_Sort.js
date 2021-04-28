/**
 * Time complexity: O(n^2)
 * @param {Array<Number>} arr
 * @returns Array
 */
const InsertionSort = (arr) => {
  const result = [...arr];
  for (let i = 1; i < arr.length; i++) {
    const tmp = result[i];
    let j = i - 1;
    while (j >= 0 && result[j] > tmp) {
      result[j + 1] = result[j];
      j--;
    }
    result[j + 1] = tmp;
  }
  return result;
};
