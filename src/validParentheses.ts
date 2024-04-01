export function isValid(s: string): boolean {
    let stack: string[] = [];
    for (let i: number = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(')');
        } else if (s[i] == '{') {
            stack.push('}');
        } else if (s[i] == '[') {
            stack.push(']');
        }
        else if (stack.length == 0 || stack.pop() !== s[i]) {
            return false;
        }
    }

    return (stack.length === 0);
}