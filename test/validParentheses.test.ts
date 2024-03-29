import { isValid } from "../src/validParentheses";


describe('validParentheses test', () => {
    test("()[]{} is valid parentheses", () => {
        let input: string = '()[]{}';
        expect(isValid(input)).toBeTruthy();
    })

    test("(] is invalid parentheses", () => {
        let input: string = '(]';
        expect(isValid(input)).toBeFalsy();
    })

    test("})] is invalid parentheses", () => {
        let input: string = '})]';
        expect(isValid(input)).toBeFalsy();
    })
})