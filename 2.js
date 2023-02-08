const divide = async (x, y) => {
  // making the promise
  const promise = new Promise((resolve, reject) => {
    if (y === 0) {
      reject(new Error('Invalid')); // prints: 'Invalid' for the third call of divide()
    }

    resolve(x / y)
  })

  // fulfilling the promise
  const result = await promise;

  console.log(result) // 1, 0.5

  return result;
}

divide(2, 2)
divide(2, 4)
divide(2, 0)


