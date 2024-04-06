import { threeSum } from '../src/threeSum';


describe('threeSum', () => {
    test('should return correct result', () => {
      const nums = [-1, 0, 1, 2, -1, -4];
      const expected = [[-1, -1, 2], [-1, 0, 1]];
      expect(threeSum(nums)).toEqual(expected);
    });
  
    test('should return empty array if no triplets found', () => {
      const nums = [1, 2, 3, 4, 5];
      const expected: number[][] = [];
      expect(threeSum(nums)).toEqual(expected);
    });
  
    test('should handle array with negative numbers', () => {
      const nums = [-2, -1, 0, -1, 2];
      const expected = [[-2, 0, 2], [-1, -1, 2]];
      expect(threeSum(nums)).toEqual(expected);
    });
  });