import { twoSum } from "../src/twoSum";


describe('twoSum test', () => {
    test("nums=[2,7,11,15], target=9, output=[0, 1]", () => {
        const nums: number[] = [2, 7, 11, 15];
        const target: number = 9;
        const output: number[] = [0, 1];
        expect(twoSum(nums, target)).toEqual(output);
    })

    test("nums=[3,2,4], target=6, output=[1, 2]", () => {
        const nums: number[] = [3, 2, 4];
        const target: number = 6;
        const output: number[] = [1, 2];
        expect(twoSum(nums, target)).toEqual(output);
    })

    test("nums=[1,3,7], target=6, output=[]", () => {
        const nums: number[] = [1, 3, 7];
        const target: number = 6;
        const output: number[] = [];
        expect(twoSum(nums, target)).toEqual(output);
    })
})