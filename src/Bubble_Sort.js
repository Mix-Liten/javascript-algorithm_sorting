/**
 * Time complexity: O(n^2)
 * @param {Array<Number>} arr
 * @returns Array
 */
const BubbleSort = (arr) => {
  const result = [...arr];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (result[j] <= result[j + 1]) continue;
      [result[j], result[j + 1]] = [result[j + 1], result[j]];
    }
  }
  return result;
};
