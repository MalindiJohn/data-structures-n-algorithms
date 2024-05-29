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
console.log(evalRPN(["18"])); // 18
console.log(evalRPN(["18", "1", "+"])); // 19
console.log(evalRPN(["18", "1", "-"])); // 17
console.log(evalRPN(["18", "1", "*"])); // 18
console.log(evalRPN(["18", "1", "/"])); // 18
console.log(evalRPN(["18", "1", "2", "+", "*"])); // 54
console.log(evalRPN(["18", "1", "2", "-", "*"])); // 34
console.log(evalRPN(["18", "1", "2", "*", "/"])); // 9
console.log(evalRPN(["18", "1", "2", "/", "*"])); // 36
console.log(evalRPN(["18", "1", "2", "+", "3", "*", "+"])); // 25
console.log(evalRPN(["18", "1", "2", "-", "3", "+"])); //
console.log(evalRPN(["18", "1", "2", "*", "3", "/"])); //
console.log(evalRPN(["18", "1", "2", "/", "3", "*"])); //
console.log(evalRPN(["18", "1", "2", "+", "3", "*", "4", "+"])); //
console.log(evalRPN(["18", "1", "2", "-", "3", "+", "4", "-"])); //
console.log(evalRPN(["18", "1", "2", "*", "3", "/", "4", "*"])); //
console.log(evalRPN(["18", "1", "2", "/", "3", "*", "4", "/"])); //
console.log(evalRPN(["18", "1", "2", "+", "3", "*", "4", "+", "5", "+"])); //
console.log(evalRPN(["18", "1", "2", "-", "3", "+", "4", "-", "5", "-"])); //
console.log(evalRPN(["18", "1", "2", "*", "3", "/", "4", "*", "5", "*"])); //
console.log(evalRPN(["18", "1", "2", "/", "3", "*", "4", "/", "5", "/"])); //
console.log(evalRPN(["18", "1", "2", "+", "3", "*", "4", "+", "5", "+", "6", "+"])); //
console.log(evalRPN(["18", "1", "2", "-", "3", "+", "4", "-", "5", "-", "6", "-"])); //
console.log(evalRPN(["18", "1", "2", "*", "3", "/", "4", "*", "5", "*", "6", "*"])); //
console.log(evalRPN(["18", "1", "2", "/", "3", "*", "4", "/", "5", "/", "6", "/"])); //