/**
 * 合併排序，先將陣列拆解至最小單位再合併，並於合併時進行比對
 * 拆解方式為二分法
 * 比對方式為判斷二分法兩側第一個值中的較小值依序放入該輪結果陣列，第一個值為上一輪已排序的最小值
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
