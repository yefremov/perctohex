// src/index.ts
function percToHex(p) {
  if (!Number.isFinite(p)) {
    throw new TypeError("Input must be a finite number");
  }
  return ("0" + Math.ceil(255 / 100 * (p < 0 ? 0 : p > 100 ? 100 : p)).toString(16)).slice(-2).toUpperCase();
}
var index_default = percToHex;
export {
  index_default as default
};
