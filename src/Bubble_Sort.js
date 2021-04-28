/**
 * 氣泡排序，依序比對相鄰的兩個元素，若前者比後者大則互換
 * PS: 每一輪比對排到最尾端的值為該輪最大值，此最大值不參與下一輪比對
 * Time complexity: O(n^2)
 * @param {Array<Number>} arr
 * @returns Array
 */
const BubbleSort = (arr) => {
  const result = [...arr];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (result[j + 1] >= result[j]) continue;
      [result[j], result[j + 1]] = [result[j + 1], result[j]];
    }
  }
  return result;
};
