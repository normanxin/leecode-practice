/*
 * @lc app=leetcode id=164 lang=javascript
 *
 * [164] Maximum Gap
 *
 * https://leetcode.com/problems/maximum-gap/description/
 *
 * algorithms
 * Hard (31.73%)
 * Total Accepted:    65.6K
 * Total Submissions: 206.8K
 * Testcase Example:  '[3,6,9,1]'
 *
 * Given an unsorted array, find the maximum difference between the successive
 * elements in its sorted form.
 * 
 * Return 0 if the array contains less than 2 elements.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,6,9,1]
 * Output: 3
 * Explanation: The sorted form of the array is [1,3,6,9], either
 * (3,6) or (6,9) has the maximum difference 3.
 * 
 * Example 2:
 * 
 * 
 * Input: [10]
 * Output: 0
 * Explanation: The array contains less than 2 elements, therefore return 0.
 * 
 * Note:
 * 
 * 
 * You may assume all elements in the array are non-negative integers and fit
 * in the 32-bit signed integer range.
 * Try to solve it in linear time/space.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if (!nums.length) {
    return 0;
  }

  const max = Math.max(...nums);
  const min = Math.min(...nums);
  const size = Math.floor((max - min) / nums.length) + 1;
  const bucketNums = Math.floor((max - min) / size) + 1;
  const bucketMin = Array(bucketNums).fill(Infinity);
  const bucketMax = Array(bucketNums).fill(-Infinity);
  const set = new Set();
  let res = 0;

  for (let num of nums) {
    const idx = Math.floor((num - min) / size);

    bucketMin[idx] = Math.min(bucketMin[idx], num);
    bucketMax[idx] = Math.max(bucketMax[idx], num);
    set.add(idx);
  }

  for (let i = 1, pre = 0; i < nums.length; i++) {
    if (!set.has(i)) {
      continue;
    }

    res = Math.max(res, bucketMin[i] - bucketMax[pre]);
    pre = i;
  }
 
  return res;
};