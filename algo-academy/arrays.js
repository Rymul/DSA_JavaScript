/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = [];
    const map = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }

    for( let i = 0; i < s.length; i++){
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){
            stack.push(s[i])
        } else {
            if(stack[stack.length - 1] === map[s[i]]){
                stack.pop()
            } else if(s[i] !== ")" || s[i] !== "}" || s[i] !== "]") {
                continue;
            }    
            else {
                return false;
            }
        }
    }
    return stack.length === 0
 }

 let s = "()[]{}"
 console.log(isValid(s))


 let a = "({[abc]})"
 console.log(isValid(a))

 

