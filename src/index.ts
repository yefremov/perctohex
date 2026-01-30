/**
 * Converts percentage value `p` to hex value.
 *
 * @param {number} p The percentage value to convert.
 * @returns {string} The hexadecimal value code.
 * @throws {TypeError} If percent is not a finite number.
 * @example
 *
 * percToHex(85);
 * // => 'D9'
 */

function percToHex(p: number): string {
  if (!Number.isFinite(p)) {
    throw new TypeError('Input must be a finite number');
  }
  return ('0' + Math.ceil((255 / 100) * (p < 0 ? 0 : p > 100 ? 100 : p)).toString(16)).slice(-2).toUpperCase();
}

export default percToHex;
