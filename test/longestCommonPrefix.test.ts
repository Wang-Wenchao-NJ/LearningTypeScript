import { longestCommonPrefix } from "../src/longestCommonPrefix";



// 单元测试
describe('longestCommonPrefix', () => {
    test('empty array returns empty string', () => {
        expect(longestCommonPrefix([])).toBe('');
    });

    test('single string returns the string itself', () => {
        expect(longestCommonPrefix(['flower'])).toBe('flower');
    });

    test('multiple strings with common prefix', () => {
        expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
    });

    test('no common prefix', () => {
        expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
    });

    test('all strings equal', () => {
        expect(longestCommonPrefix(['hello', 'hello', 'hello'])).toBe('hello');
    });

    test('strings containing special characters', () => {
        expect(longestCommonPrefix(['foo-bar', 'foo_baz', 'foo_qux'])).toBe('foo');
    });
});