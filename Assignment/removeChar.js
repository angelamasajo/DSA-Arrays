function removeCharacters(string, chars) {
  let output = '';
  for (let i = 0; i < string.length; i++) {
    let contained = true;
    for (let j = 0; j < chars.length; j++) {
      if (string[i] === chars[j]) {
        contained = false;
      }
    }
    if (contained) {
      output += string[i];
    }
  }
  return output;
}


//console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'
// Complexity: O (n^2)





function removeChar(string, letters) {
  const letterArr = []
  const stringArr = []

  for(let i=0; i<letters.length; i++) {
      letterArr.push(letters.charAt(i))
  }
  for(let i=0; i<string.length; i++) {
      stringArr.push(string.charAt(i))
  }

  letterArr.forEach(letter => {
      stringArr.forEach((strLtr, index) => {
          if (letter === strLtr) {
              stringArr.splice(index, 1)
          }
      })
  })

  const concatString = stringArr.reduce((acc, curr) => {
      return acc + curr
  })

  return concatString
}

removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')


// don't understand this one fully???