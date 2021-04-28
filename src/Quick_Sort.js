/**
 * Time complexity: O(n logn) ~ Ο(n^2)
 * @param {Array<Number>} arr
 * @returns Array
 */
const QuickSort = (arr) => {
  if (arr.length < 2) return arr;
  // 設基準值
  const pivot = arr[arr.length - 1];
  // 比基準值小的值
  const left = [];
  // 比基準值大的值
  const right = [];

  // arr.length - 1，不比較基準值
  for (let i = 0; i < arr.length - 1; i++) {
    pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...QuickSort(left), pivot, ...QuickSort(right)];
};