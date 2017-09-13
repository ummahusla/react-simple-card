const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs");
const resolve = require("rollup-plugin-node-resolve");

export default {
  dest: "dist/index.js",
  entry: "src/index.js",
  format: "cjs",
  plugins: [
    resolve(),
    commonjs(),
    babel()
  ]
}
