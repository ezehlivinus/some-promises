

const promise1 = new Promise((resolve, reject) => {
  const y = 2
  const x = 4
  if (y === 0) {
    reject('Invalid'); // prints: 'Invalid' for the third call of divide()
  }

  resolve(x / y)
})

const promise2 = new Promise((resolve, reject) => {
  const y = 3
  const x = 6
  if (y === 0) {
    reject('Invalid'); // prints: 'Invalid' for the third call of divide()
  }

  resolve(x / y)
})

const promise3 = new Promise((resolve, reject) => {
  const y = 2
  const x = 2
  if (y === 0) {
    reject('Invalid'); // prints: 'Invalid' for the third call of divide()
  }

  resolve(x / y)
})

// using promise.all
const promiseResultAll = await Promise.all([promise1, promise2, promise3])
// using Promise.race
const promiseResultRace = await Promise.race([promise1, promise2, promise3])
// using promise.allSettled
const promiseResultAllSettle = await Promise.allSettled([promise1, promise2, promise3])

console.log(promiseResultAll)
console.log(promiseResultRace)
console.log(promiseResultAllSettle)
