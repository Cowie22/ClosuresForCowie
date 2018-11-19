/*
Create a whatsmyname function using closures
The function will take one argument, 1. a string
whatsmyname should return a function. Use the tests to guide you
*/

const whatsmyname = function (name) {
  return function(myName) {
    if (myName === name) {
      return true;
    } else {
      return false;
    }
  }
}

const mynameisnick = whatsmyname('nick');
const mynameisryan = whatsmyname('ryan');
const mynameisdave = whatsmyname('dave');

mynameisryan('ryan');

module.exports = whatsmyname
