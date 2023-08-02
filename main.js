"use strict";

// Factorialize a Number
// we create a function, in it we create a variable result with the number n passed to the function.
// we create a reverse cycle, from a number equal to n - 1, up to 1 inclusive.
// with each iteration, we multiply the number in the result variable by the current loop number.
// output the result.

function factorialize(n) {
  let result = n;

  for (let i = n - 1; i > 0; i--) {
    result *= i;
  }

  return result;
}

console.log(factorialize(6)); // 720
