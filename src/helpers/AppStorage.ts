import { parseIfJsonString } from './JSONHelper'

class AppStorage {
  private get isBrowser() {
    return typeof window !== 'undefined'
  }

  setItem<T extends any = any>(key: string, value: T) {
    if (this.isBrowser) {
      const stored = JSON.stringify(value)
      return localStorage.setItem(key, stored)
    }
    return null
  }

  removeItem(key: string) {
    if (this.isBrowser) {
      return localStorage.removeItem(key)
    }
    return null
  }

  getItem<T = any>(key: string): T | null {
    if (this.isBrowser) {
      const ls = localStorage.getItem(key)
      return parseIfJsonString(ls)
    }
    return null
  }

  clear(): void {
    if (this.isBrowser) {
      return localStorage.clear()
    }
  }
}

export default new AppStorage()
