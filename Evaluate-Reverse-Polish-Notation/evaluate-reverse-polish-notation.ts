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