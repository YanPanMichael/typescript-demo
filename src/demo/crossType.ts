function extend<T, U>(first: T, second: U): T & U {
  let result = {};
  for (const id in first) {
    if (!result.hasOwnProperty(id)) {
      result[id] = first[id]
    }
  }
  for (const id in second) {
    if (!result.hasOwnProperty(id)) {
      result[id] = second[id] as any;
    }
  }
  return result as T & U;
}
