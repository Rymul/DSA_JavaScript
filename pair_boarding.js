// Write a function valueReplace(array, object) that takes in an array and an object.
// The function should return a new array where each element of the original array
// is replaced with it’s corresponding value from the object.

const valueReplace = (arr, obj) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        if(obj[arr[i]]){
            newArr.push(obj[arr[i]])
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr
}



// Examples:
console.log(valueReplace(["a", "b", "c", "d"], {a: 1, b: 2, d: 4}))
// => [ 1, 2, "c", 4 ]
console.log(valueReplace(["danny", "kurstie", "tommy"], {kurstie: "operations", danny: "placements"}))
// => [ ‘placements’, ‘operations’, ‘tommy’ ]



var makeGood = function(s) {
    if (s.length === 1) return s;
    let isBad = true;
    let arr = s.split("");
    
    while(isBad){
        isBad = false;
        
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] !== arr[i+1] && arr[i].toLowerCase() === arr[i+1].toLowerCase()){
                isBad = true
                arr[i] = ""
                arr[i+1] = ""
                arr = arr.join("").split("")
            }
        }
    }
    return arr.join("")
};


var betterMakeGood = function(s) {
    const stack = [''];
    
    for(let char of s) {
        let top = stack[stack.length-1];
        if(top.toLowerCase() === char.toLowerCase() && top !== char) stack.pop()
        else stack.push(char);
    }
    return stack.join('');
};


s1 = "leEeetcode"
// "leetcode"
s2 = "abBAcC"
// ""
console.log(makeGood(s1))
console.log(makeGood(s2))
console.log(betterMakeGood(s1))
console.log(betterMakeGood(s2))


