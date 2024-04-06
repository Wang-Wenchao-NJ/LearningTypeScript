export function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b); // 先对数组进行排序
    const n = nums.length;
    const result: number[][] = [];
    const target: number = 0;

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) { // 跳过重复的固定数
            continue;
        }

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            if (currentSum === target) {
                result.push([nums[i], nums[left], nums[right]]);

                // 跳过重复的左、右指针指向的数
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                left++;

                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                right--;

            } else if (currentSum < target) {
                left++; // 和太小，左指针右移

            } else { // currentSum > target
                right--; // 和太大，右指针左移
            }
        }
    }

    return result;
}