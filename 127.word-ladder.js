/*
 * [127] Word Ladder
 *
 * https://leetcode.com/problems/word-ladder/description/
 *
 * algorithms
 * Medium (21.81%)
 * Total Accepted:    207.8K
 * Total Submissions: 952.5K
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * Given two words (beginWord and endWord), and a dictionary's word list, find
 * the length of shortest transformation sequence from beginWord to endWord,
 * such that:
 * 
 * 
 * Only one letter can be changed at a time.
 * Each transformed word must exist in the word list. Note that beginWord is
 * not a transformed word.
 * 
 * 
 * Note:
 * 
 * 
 * Return 0 if there is no such transformation sequence.
 * All words have the same length.
 * All words contain only lowercase alphabetic characters.
 * You may assume no duplicates in the word list.
 * You may assume beginWord and endWord are non-empty and are not the same.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * 
 * Output: 5
 * 
 * Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" ->
 * "dog" -> "cog",
 * return its length 5.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 * 
 * Output: 0
 * 
 * Explanation: The endWord "cog" is not in wordList, therefore no possible
 * transformation.
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const visited = new Set().add(beginWord);
  let res = 0;

  wordList = new Set(wordList);

  if (!wordList.has(endWord)) {
    return res;
  }

  for (let queue = [beginWord]; queue.length;) {
    const next = [];

    res++;

    for (let word of queue) {
      if (word === endWord) {
        return res;
      }

      for (let i = 0; i < word.length; i++) {
        const chs = word.split('');

        for (let c = 'a'.charCodeAt(); c <= 'z'.charCodeAt(); c++) {
          chs[i] = String.fromCharCode(c);

          const candidate = chs.join('');

          if (!wordList.has(candidate) || visited.has(candidate)) {
            continue;
          }

          next.push(candidate);
          visited.add(candidate);
        }
      }
    }

    queue = next; 
  }

  return 0;
};
