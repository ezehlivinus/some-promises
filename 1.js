

const divide = (x, y) => {
  // making the promise
  const promise = new Promise((resolve, reject) => {
    if (y === 0) {
      reject(new Error('Invalid'));
    }

    resolve(x / y)
  })

  // fulfilling the promise
  promise.then((value) => {
    console.log(value) // 1, 0.5
  }).catch((error) => {
    throw new Error(error) // prints 'Error: Invalid' for the third call of divide()
  })

}

divide(2, 2)
divide(2, 4)
divide(2, 0)
