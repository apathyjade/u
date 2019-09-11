/** 数组 Each */
export const arrayEach = (array, iteratee) => {
  let index = -1
  const length = array == null ? 0 : array.length

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break
    }
  }
  return array
}
/** 数组 match */
export const arrayMatch = (array, match, fn = it => it, type = 'continue') => {
  let index = -1
  const length = array == null ? 0 : array.length
  let result = null
  while (++index < length) {
    if (
      typeof match === 'function' &&
      match(array[index], index, array, result)
    ) {
      result = fn(array[index], index, array, result)
      if (type === 'break') break
    }
  }
  return result
}
/** 数组 Map */
export const arrayMap = (array, predicate) => {
  const tmp = []
  arrayEach(array, (it, idx, array) => tmp.push(predicate(it, idx, array)))
  return tmp
}
/** 数组 Filter */
export const arrayFilter = (array, predicate) => {
  let index = -1
  let resIndex = 0
  const length = array == null ? 0 : array.length
  const result = []

  while (++index < length) {
    const value = array[index]
    if (predicate(value, index, array)) {
      result[resIndex++] = value
    }
  }
  return result
}
