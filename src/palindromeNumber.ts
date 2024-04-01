export function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }

    let tmp : number = x;
    let sum : number = 0;
    while (tmp != 0) {
        sum = sum * 10 + tmp % 10;
        tmp = tmp/10 | 0;
    }

    return (sum === x);
};