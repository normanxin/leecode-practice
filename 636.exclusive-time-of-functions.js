/*
 * @lc app=leetcode id=636 lang=javascript
 *
 * [636] Exclusive Time of Functions
 *
 * https://leetcode.com/problems/exclusive-time-of-functions/description/
 *
 * algorithms
 * Medium (49.48%)
 * Total Accepted:    47K
 * Total Submissions: 94.9K
 * Testcase Example:  '2\n["0:start:0","1:start:2","1:end:5","0:end:6"]'
 *
 * On a single threaded CPU, we execute some functions.  Each function has a
 * unique id between 0 and N-1.
 * 
 * We store logs in timestamp order that describe when a function is entered or
 * exited.
 * 
 * Each log is a string with this format: "{function_id}:{"start" |
 * "end"}:{timestamp}".  For example, "0:start:3" means the function with id 0
 * started at the beginning of timestamp 3.  "1:end:2" means the function with
 * id 1 ended at the end of timestamp 2.
 * 
 * A function's exclusive time is the number of units of time spent in this
 * function.  Note that this does not include any recursive calls to child
 * functions.
 * 
 * The CPU is single threaded which means that only one function is being
 * executed at a given time unit.
 * 
 * Return the exclusive time of each function, sorted by their function id.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * 
 * 
 * Input:
 * n = 2
 * logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]
 * Output: [3, 4]
 * Explanation:
 * Function 0 starts at the beginning of time 0, then it executes 2 units of
 * time and reaches the end of time 1.
 * Now function 1 starts at the beginning of time 2, executes 4 units of time
 * and ends at time 5.
 * Function 0 is running again at the beginning of time 6, and also ends at the
 * end of time 6, thus executing for 1 unit of time. 
 * So function 0 spends 2 + 1 = 3 units of total time executing, and function 1
 * spends 4 units of total time executing.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= n <= 100
 * Two functions won't start or end at the same time.
 * Functions will always log when they exit.
 * 
 * 
 * 
 * 
 */
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
const exclusiveTime = (n, logs) => {
  const res = Array(n).fill(0);
  let stack = [];

  logs.forEach(log => {
    const [id, activity, time] = log.split(':');

    if (activity === 'start') {
      if (stack.length) {
        const [preId, preStartTime] = stack[stack.length - 1];

        res[preId] += time - preStartTime;
      }

      stack.push([id, time]);
    } else if (activity === 'end') {
      res[id] += time - stack.pop()[1] + 1;

      if (stack.length) {
        stack[stack.length - 1][1] = +time + 1;
      }
    }
  });

  return res;
};