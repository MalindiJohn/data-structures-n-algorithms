/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    let stack = [];
    let operators = ["+", "-", "*", "/"];
    
    for (let token of tokens) {
        if (operators.includes(token)) {
            let b = stack.pop();
            let a = stack.pop();
            if (token === "+") {
                stack.push(a + b);
            } else if (token === "-") {
                stack.push(a - b);
            } else if (token === "*") {
                stack.push(a * b);
            } else if (token === "/") {
                stack.push(a / b | 0);
            }
        } else {
            stack.push(parseInt(token));
        }
    }
    
    return stack.pop();
    
};

// testing the function
console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
console.log(evalRPN(["10", "6", "9", "3", "/", "-11", "*", "+", "*", "17", "+", "5", "+"])); // 22