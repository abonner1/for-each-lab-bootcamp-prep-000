function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var anything = ["Harry", "Ron", "Hermoine"]

  anything.forEach(callback)

  return anything
}

function doToArray(array, callback) {
  array.forEach(callback)
}
