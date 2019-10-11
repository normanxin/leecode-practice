/*
 * [398] Random Pick Index
 *
 * https://leetcode.com/problems/random-pick-index/description/
 *
 * algorithms
 * Medium (47.76%)
 * Total Accepted:    47.1K
 * Total Submissions: 98.5K
 * Testcase Example:  '["Solution","pick"]\n[[[1,2,3,3,3]],[3]]'
 *
 * Given an array of integers with possible duplicates, randomly output the
 * index of a given target number. You can assume that the given target number
 * must exist in the array.
 * 
 * Note:
 * The array size can be very large. Solution that uses too much extra space
 * will not pass the judge.
 * 
 * Example:
 * 
 * 
 * int[] nums = new int[] {1,2,3,3,3};
 * Solution solution = new Solution(nums);
 * 
 * // pick(3) should return either index 2, 3, or 4 randomly. Each index should
 * have equal probability of returning.
 * solution.pick(3);
 * 
 * // pick(1) should return 0. Since in the array only nums[0] is equal to 1.
 * solution.pick(1);
 * 
 * 
 */
class Solution {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.nums = nums.reduce((map, num, i) => {
      !map.has(num) && map.set(num, []);
      map.get(num).push(i);

      return map;
    }, new Map());
  }

  /** 
   * @param {number} target
   * @return {number}
   */
  pick(target) {
    const indice = this.nums.get(target);

    return indice[Math.floor(Math.random() * indice.length)];
  }
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.pick(target)
 */
