/**
 * Time complexity: O(n logn)
 * @param {Array<Number>} arr
 * @returns Array
 */
const MergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  // 遞迴將陣列拆到最小
  const half = Math.floor(arr.length / 2);
  const left = MergeSort(arr.slice(0, half));
  const right = MergeSort(arr.slice(half));

  let result = [];
  while (left.length > 0 && right.length > 0) {
    // 將較小的值從切片中取出並推進結果陣列
    if (right[0] > left[0]) {
      result.push(left.shift());
      continue;
    }
    result.push(right.shift());
  }
  return result.concat(left, right);
};
