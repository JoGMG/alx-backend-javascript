import Currency from './3-currency'; // eslint-disable-line no-unused-vars

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * @param {Number} amount
   */
  set amount(amount) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  /**
   * @param {Currency} currency
   */
  set currency(currency) {
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  /**
   * @param {Number} amount
   * @param {Number} conversionRate
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
