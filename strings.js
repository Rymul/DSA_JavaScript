/**
 * 67. Add Binary
 * Given two binary strings a and b, return their sum as a binary string.
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    const arrA = a.split("").reverse();
    const arrB = b.split("").reverse();
    let carry = 0;
    let answer = [];
    let i = 0;
    const len = a.length > b.length ? a.length : b.length;

  while (i < len) {
    const x = arrA[i] ? +arrA[i] : 0;
    const y = arrB[i] ? +arrB[i] : 0;
    const sum = carry + x + y;
    carry = Math.floor(sum / 2);
    answer.unshift(sum % 2);
    i++;
  }

  if (carry > 0) answer.unshift(carry);

  return answer.join("");
};