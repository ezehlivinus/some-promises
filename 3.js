const divide = async (x, y) => {
  // making the promise, await for it to resolve
  const promise = await new Promise((resolve, reject) => {
    if (y === 0) {
      reject(new Error('Invalid')); // prints: 'Invalid' for the third call of divide()
    }

    resolve(x / y)
  })

  console.log(promise) // 1, 0.5
}

divide(2, 2)
divide(2, 4)
divide(2, 0)
