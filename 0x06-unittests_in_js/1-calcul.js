/**
 * Upgrade the function you created in the previous task (`0-calcul.js`).
 * Add a new argument named `type` at first argument of the function,
 * `type` can be `SUM`, `SUBTRACT`, or `DIVIDE` (string).
 * When type is `SUM`, round the two numbers, and add `a` and `b`.
 * When type is `SUBTRACT`, round the two numbers, and subtract `b` from
 * `a`.
 * When type is `DIVIDE`, round the two numbers, and divide `a` with `b`
 * - if the rounded value of `b` is equal to 0, return the string `Error`
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
