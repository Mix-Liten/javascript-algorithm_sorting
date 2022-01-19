/**
 * 選擇排序，挑出最小值放在該輪最前方
 * Time complexity: O(n²)
 * Space complexity: O(1)
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
