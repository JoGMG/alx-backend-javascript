/**
 * An upgrade of the function in (`0-calcul.js`) created in the
 * previous task.
 * - Added a new argument named `type` as the first argument of the
 * function, `type` can be `SUM`, `SUBTRACT`, or `DIVIDE` (string).
 * - When type is `SUM`, `a` and `b` are rounded up and added together.
 * - When type is `SUBTRACT`, `a` and `b` are rounded up, and `b` is
 * subtracted from `a`.
 * - When type is `DIVIDE`, `a` and `b` are rounded up, and `a` is
 * divided by `b`. If the rounded value of `b` is equal to 0, a string
 * `Error` is returned.
 */
function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    result = Math.round(a) + Math.round(b);
    return result;
  } else if (type === 'SUBTRACT') {
    result = Math.round(a) - Math.round(b);
    return result;
  } else if (type === 'DIVIDE') {
    if (b === 0) {
      return 'Error';
    }
    result = Math.round(a) / Math.round(b);
    return result;
  }
}

module.exports = calculateNumber;
