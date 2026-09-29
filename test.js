// Exercises the dependencies so an update that breaks them fails CI.
const assert = require("node:assert");
const _ = require("lodash");
const YAML = require("yaml");

assert.deepStrictEqual(_.chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
assert.deepStrictEqual(YAML.parse("a: 1"), { a: 1 });
console.log("ok");
