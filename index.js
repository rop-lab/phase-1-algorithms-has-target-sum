function hasTargetSum(array, target) {
  // Write your algorithm here
  const visitedNumbers = new Set();

  for (const num of array) {
    const diff = target - num;

    if (visitedNumbers.has(diff)) {
      return true;
    }

    visitedNumbers.add(num);
  }

  return false;
}


/* 
  Write the Big O time complexity of your function here
  The time complexity is O(n) where n is the length of the array, as the function iterates through the array once.
*/

/* 
  Add your pseudocode here
  1. Initialize an empty set to keep track of visited numbers.
  2. For each number in the array:
  3. Calculate the difference between the target and the current number.
  4. Check if the difference is in the set of visited numbers.
  5. If yes, return true (pair found).
  6. If no, add the current number to the set.
  7. If no pair is found after iterating through the array, return false.

*/

/*
  Add written explanation of your solution here
  The function iterates through the array while keeping track of visited numbers in a set. For each number, it calculates the difference between the target and the current number. If the difference is in the set, a pair is found, and the function returns true. If no pair is found after iterating through the array, it returns false.
*/

// You can run node index.js to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;