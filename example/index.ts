// Dependencies
import {Typpy} from "../lib/typpy.ts"

console.log(Typpy(0));
// => "number"

console.log(Typpy("", String));
// => true

console.log(Typpy.is(null, "null"));
// => true

console.log(Typpy.get([]));
// => Array

console.log(Typpy({}, true));
// => "false"

console.log(Typpy({}, Object));
// => true