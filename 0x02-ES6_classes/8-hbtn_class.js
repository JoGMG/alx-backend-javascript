export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](type) {
    if (type === 'number') {
      return this.size;
    }
    if (type === 'string') {
      return this.location;
    }
    return this;
  }
}
