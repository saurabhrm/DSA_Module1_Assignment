// Question 7
// You are given an inclusive range [lower, upper] and a sorted unique integer array
// nums, where all elements are within the inclusive range.

// A number x is considered missing if x is in the range [lower, upper] and x is not in
// nums.

// Return the shortest sorted list of ranges that exactly covers all the missing
// numbers. That is, no element of nums is included in any of the ranges, and each
// missing number is covered by one of the ranges.

// Example 1:
// Input: nums = [0,1,3,50,75], lower = 0, upper = 99
// Output: [[2,2],[4,49],[51,74],[76,99]]

// Explanation: The ranges are:
// [2,2]
// [4,49]
// [51,74]
// [76,99]

function findMissingRanges(nums, lower, upper) {
    const result = [];

    // Helper function to add a range to the result
    function addRange(start, end) {
        if (start === end) {
            result.push(start.toString());
        } else {
            result.push(start.toString() + '->' + end.toString());
        }
    }

    // Find missing numbers before the first element
    if (nums[0] > lower) {
        addRange(lower, nums[0] - 1);
    }

    // Find missing numbers between consecutive elements
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1] + 1) {
            addRange(nums[i - 1] + 1, nums[i] - 1);
        }
    }

    // Find missing numbers after the last element
    if (nums[nums.length - 1] < upper) {
        addRange(nums[nums.length - 1] + 1, upper);
    }

    return result;
}

let nums = [0, 1, 3, 50, 75];
let lower = 0;
let upper = 99;
let result = findMissingRanges(nums, lower, upper);
console.log(result); // Output: ["2", "4->49", "51->74", "76->99"]
