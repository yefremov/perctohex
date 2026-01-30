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
declare function percToHex(p: number): string;

export { percToHex as default };
