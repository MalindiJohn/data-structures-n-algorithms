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