/*
 * @lc app=leetcode id=89 lang=javascript
 *
 * [89] Gray Code
 *
 * https://leetcode.com/problems/gray-code/description/
 *
 * algorithms
 * Medium (44.14%)
 * Total Accepted:    120.4K
 * Total Submissions: 272.9K
 * Testcase Example:  '2'
 *
 * The gray code is a binary numeral system where two successive values differ
 * in only one bit.
 * 
 * Given a non-negative integer n representing the total number of bits in the
 * code, print the sequence of gray code. A gray code sequence must begin with
 * 0.
 * 
 * Example 1:
 * 
 * 
 * Input: 2
 * Output: [0,1,3,2]
 * Explanation:
 * 00 - 0
 * 01 - 1
 * 11 - 3
 * 10 - 2
 * 
 * For a given n, a gray code sequence may not be uniquely defined.
 * For example, [0,2,3,1] is also a valid gray code sequence.
 * 
 * 00 - 0
 * 10 - 2
 * 11 - 3
 * 01 - 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 0
 * Output: [0]
 * Explanation: We define the gray code sequence to begin with 0.
 * A gray code sequence of n has size = 2n, which for n = 0 the size is 20 =
 * 1.
 * Therefore, for n = 0 the gray code sequence is [0].
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  const res = new Set();

  for (let cur = 0; res.size < 2 ** n;) {
    res.add(cur);

    for (let mask = 1; mask <= 1 << (n - 1); mask <<= 1) {
      const candidate = cur ^ mask;

      if (!res.has(candidate)) {
        cur = candidate;
        break;
      }
    }
  }

  return [...res];
};
