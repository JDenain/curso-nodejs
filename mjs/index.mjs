// .js -> Por defecto utiliza CommonJS
// .mjs -> Para utilizar ES Modules
// .cjs -> Para utilizar commonJS

import {sum, sub, mul, div} from './sum.mjs'

console.log(sum(5,5))
console.log(sub(5,5))
console.log(mul(5,5))
console.log(div(5,5))