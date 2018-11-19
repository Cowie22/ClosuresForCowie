/*
Write a function called loginProtect
This function will take 3 arguments
1. A username
2. A password
3. A function that will take two arguments
Your function should return a closure that when invoked 
with the correct username and password will invoke your third argument
with the 3rd and 4th argument that are passed to your closure 
Use the tests to guide your solution
*/


const myFunc = function(a, b) {
  return a + b;
} 

const loginProtect = function(username, password, func) {
  return function(myUsername, myPassword, a, b) {
    if (myUsername === username && myPassword === password) {
      return func(a, b);
    }
  }
}

const login1 = loginProtect('foo', 'bar', myFunc);
login1('foo', 'bar', 8, 14);

module.exports = loginProtect
