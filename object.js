/* 深度拷贝 */
export const copy = (data) => {
  return JSON.parse(JSON.stringify(data))
}
