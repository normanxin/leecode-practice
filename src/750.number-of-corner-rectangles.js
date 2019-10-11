/*
 * [751] Number Of Corner Rectangles
 *
 * https://leetcode.com/problems/number-of-corner-rectangles/description/
 *
 * algorithms
 * Medium (60.80%)
 * Total Accepted:    11.7K
 * Total Submissions: 19.2K
 * Testcase Example:  '[[0,1,0],[1,0,1],[1,0,1],[0,1,0]]'
 *
 * Given a grid where each entry is only 0 or 1, find the number of corner
 * rectangles.
 * 
 * A corner rectangle is 4 distinct 1s on the grid that form an axis-aligned
 * rectangle. Note that only the corners need to have the value 1. Also, all
 * four 1s used must be distinct.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: grid = 
 * [[1, 0, 0, 1, 0],
 * ⁠[0, 0, 1, 0, 1],
 * ⁠[0, 0, 0, 1, 0],
 * ⁠[1, 0, 1, 0, 1]]
 * Output: 1
 * Explanation: There is only one corner rectangle, with corners grid[1][2],
 * grid[1][4], grid[3][2], grid[3][4].
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: grid = 
 * [[1, 1, 1],
 * ⁠[1, 1, 1],
 * ⁠[1, 1, 1]]
 * Output: 9
 * Explanation: There are four 2x2 rectangles, four 2x3 and 3x2 rectangles, and
 * one 3x3 rectangle.
 * 
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: grid = 
 * [[1, 1, 1, 1]]
 * Output: 0
 * Explanation: Rectangles must have four distinct corners.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * The number of rows and columns of grid will each be in the range [1,
 * 200].
 * Each grid[i][j] will be either 0 or 1.
 * The number of 1s in the grid will be at most 6000.
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countCornerRectangles = function(grid) {
  let res = 0;

  for (let i = 0; i < grid.length - 1; i++) {
    for (let j = i + 1; j < grid.length; j++) {
      let cnt = 0;

      for (let k = 0; k < grid[0].length; k++) {
        grid[i][k] === 1 && grid[j][k] === 1 && cnt++;
      }

      res += cnt * (cnt - 1) / 2;
    }
  }

  return res;
};
