
function solution(S) {
    var brackets = {
        "{": "}",
        "(": ")",
        "[": "]"
    }

    var closedBrackets = ["}", ")", "]"]
    
    var stack = [];
    
    for (var i =0; i < S.length; i++) {
        if (brackets.hasOwnProperty(S[i])) {
            stack.push(S[i])
        } else if (brackets[stack[stack.length -1]] == S[i]) {
            stack.pop()
        } else if (closedBrackets.indexOf(S[i]) !== -1) {
        	return 0
        }
    }
    
    return stack.length === 0 ? 1 : 0
}
let S1 = "{[()()]}"
let S2 = "([)()]"
console.log(solution(S1))
console.log(solution(S2))

