var runningSum = function(nums) {
    let sum = 0;
    const res = []
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
        res.push(sum)
    }
    return res
};

console.log(runningSum([1,2,3,4]))

var arrangeWords = function(text) {
    const words = text.toLowerCase().split(" ")
    words.sort((a, b) => a.length - b.length)
    let newText = words.join(" ")
    return newText[0].toUpperCase().concat(newText.slice(1))
};