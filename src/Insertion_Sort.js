/**
 * 插入排序，類似撲克牌遊戲的大老二，由後向前找到該元素應該放置的位置
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
