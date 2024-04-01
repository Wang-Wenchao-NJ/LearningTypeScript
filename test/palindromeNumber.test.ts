import { isPalindrome } from "../src/palindromeNumber";

describe("palindrome number test", () => {
    test("121 is palindrome number", () => {
        expect(isPalindrome(121)).toBeTruthy();
    })

    test("-121 is not palindrome number", () => {
        expect(isPalindrome(-121)).toBeFalsy();
    })

    test("12 is not palindrome number", () => {
        expect(isPalindrome(12)).toBeFalsy();
    })
})
