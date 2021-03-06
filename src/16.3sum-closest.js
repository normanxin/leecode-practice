/*
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (33.21%)
 * Total Accepted:    218.6K
 * Total Submissions: 658.2K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * Given an array nums of n integers and an integer target, find three integers
 * in nums such that the sum is closest to target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 * 
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let res = Infinity;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1, k = nums.length - 1; j < k;) {
      const sum = nums[i] + nums[j] + nums[k];

      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      }

      sum < target ? j++ : k--;
    }
  }

  return res === Infinity ? 0 : res;
};
