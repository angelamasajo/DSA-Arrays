// function filterArray(array, value) {
//   let filteredArray = []
//   array.forEach(input => {
//     if (value < input) {
//       filteredArray.push(input)
//     }
//   })
//   return filteredArray
// } 

// console.log(filterArray([1, 2, 4, 8, 10], 5))




function filterArray(array, filter = 5) {
  let output = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= filter) {
      output.push(array[i])
    }
  }
  return output;
}

console.log(filterArray([1, 2, 4, 6, 9, 10]));