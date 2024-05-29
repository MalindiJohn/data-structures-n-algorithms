function evalRPN(tokens: string[]): number {

    let stack: number[] = [];

    for (let token of tokens) {

        if (token === '+') {
            stack.push(stack.pop() + stack.pop());
        } else if (token === '-') {
            stack.push(-stack.pop() + stack.pop());
        } else if (token === '*') {
            stack.push(stack.pop() * stack.pop());
        } else if (token === '/') {
            let divisor = stack.pop();
            stack.push(Math.trunc(stack.pop() / divisor));
        } else {
            stack.push(parseInt(token));
        }

    }

    return stack[0];

};

// testing the function
console.log(evalRPN(["2", "1", "+", "3", "*"])); // expected output : 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // expected output : 6
console.log(evalRPN(["10", "6", "9", "3", "/", "-11", "*", "+", "*", "17", "+", "5", "+"])); // expected output : 22