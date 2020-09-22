/* 
Type: Array

Prompt: Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array. 

The target sum has to be obtained by summing two different integers in the array, not adding a single integer to itself in order to obtain the target sum.

Assumptions: There will be at most one pair of numbers summing up to the target sum.

*/

// Time/Space Complexity of Solution:

const arrayOfInts = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10;

export function twoNumSum(array: number[], targetSumNum: number) {
  return [];
}

const result = twoNumSum(arrayOfInts, target);
console.log("result: ", result);
