function radixSort(arr) {

    if (!Array.isArray(arr)) {
        return null;
    }

    let maxDigits = getMaxDigits(arr);
    for (let i = 0; i < maxDigits; i++) {
        let buckets = Array.from({length: 10}, () => []);

        for (let j = 0; j < arr.length; j++) {
            let digit = getDigitFrom(arr[j], i);
            buckets[digit].push(arr[j]);
        }
        arr = [].concat(...buckets);
    }
    return arr
}

const getDigitFrom = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

function getMaxDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
    }
    return maxDigits;
  }

module.exports = {
    radixSort
};