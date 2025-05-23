function consecutiveSubstrings(string) {
  const result = [];
  
  // Iterate through each possible starting position
  for (let i = 0; i < string.length; i++) {
    // For each starting position, create substrings of increasing length
    for (let j = i + 1; j <= string.length; j++) {
      result.push(string.slice(i, j));
    }
  }
  
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


