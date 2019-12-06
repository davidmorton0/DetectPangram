var assert = require('assert');

function isPangram(string){
  return string.toLowerCase()
    .match(/[a-z]/g).sort().filter((val, i, self) => self.indexOf(val) === i)
    .length === 26
}

var string = "The quick brown fox jumps over the lazy dog."
assert.equal(isPangram(string), true)
