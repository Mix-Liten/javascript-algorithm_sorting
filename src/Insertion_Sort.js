/**
 * 插入排序，類似撲克牌遊戲的大老二，由後向前找到該元素應該放置的位置
 * Time complexity: Best case -> O(n), Worst case -> O(n²), Average O(n²)
 * Space complexity: O(1)
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
