import { addTwoNumbers } from "../example/maths";

//** Tasks: write tests to cover this function, find and fix the bug(s) */


function calculateAverage(numbers: number[]): number {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return Math.abs(sum) / numbers.length;
  }
  
describe("calculateAverage", () => {
    test("calculates the average of an array of numbers", () => {
        expect(calculateAverage([1, 2, 3])).toBe(2);
    });

    // write more tests here






});
  
  // Available matchers: https://jestjs.io/docs/using-matchers
  








  /**                     Stretch task: Palindromes                            */
  
  // this function returns true if the word is a palindrome (i.e. reads the same forwards and backwards - like RACECAR)
  // should ignore cases and non-alphanumeric characters
  //
  // 1) Write all the required tests for this function
  // 2) Fix the bug
  
  function isPalindrome(str: string): boolean {
    if (!str) {
      throw new Error("Input string must not be empty");
    }
  
    const normalizedStr = str.replace(/[^a-z0-9]/g, "");
  
    for (let i = 0; i < Math.floor(normalizedStr.length / 2); i++) {
      if (normalizedStr[i] !== normalizedStr[normalizedStr.length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }
  
  describe("isPalindrome", () => {});
  