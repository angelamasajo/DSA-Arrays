// function maxSum(array) {
//   let maxSum = 0
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum = 0
//     sum = array[i]
//     for (let j = i+1; j < array.length; j++) {
//       sum +- array[j]
//       if (sum > maxSum) {
//         maxSum = sum
//       }
//     }
//   }
//   return maxSum
// }

// console.log(maxSum([4, 6, -3, 5, -2, 1]))


  
// function maxSum(arr) {
//   const sums = []
//   arr.reduce((acc, curr) => {
//       sums.push(acc + curr)
//       return acc + curr
//   })
//   sums.sort((a, b) => a < b)    
//   return sums[0]
// }

// const answer = maxSum([4, 6, -3, 5, -2, 1])
// console.log(answer)



//?????????????