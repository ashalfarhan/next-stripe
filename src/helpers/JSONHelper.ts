export function isJsonString(str: any) {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}

export function parseIfJsonString(str: any): any {
  if (isJsonString(str)) {
    return JSON.parse(str)
  }
  return str
}
