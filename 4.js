const divide = async (x, y) => {
  // making the promise, await for it to resolve
  return new Promise((resolve, reject) => {
    if (y === 0) {
      reject('Invalid'); // prints: 'Invalid' for the third call of divide()
    }

    resolve(x / y)
  })
  // console.log(promise) // 1, 0.5
}

// this fails 
const result = await Promise.all([
divide(2, 2),
divide(2, 4),
divide(2, 0)
])

console.log(result) //

// const result2 = await Promise.all([
//   divide(2, 2),
//   divide(2, 4),
//   divide(4, 2)
// ])

// console.log(result2) // prints [1, 0.5, 2]

// const result3 = await Promise.allSettled([
//   divide(2, 2),
//   divide(2, 4),
//   divide(2, 0)
//   ])
  
  /**
   * prints
  [ { status: 'fulfilled', value: 1 },
  { status: 'fulfilled', value: 0.5 },
  { status: 'rejected', reason: 'Invalid' } ]
   */
  // console.log(result3)

  // the first promise that got fulfilled is returned
  // const result4 = await Promise.race([
  //   divide(2, 2),
  //   divide(2, 4),
  //   divide(2, 0)
  //   ])
    
  // console.log(result4)
