export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * @param {String} code
   */
  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('Code must be a String');
    }
  }

  get code() {
    return this._code;
  }

  /**
   * @param {String} name
   */
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a String');
    }
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
