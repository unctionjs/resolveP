/* eslint-disable flowtype/require-return-type */
import {test} from "tap"

import resolveP from "./index"

test(({equal}) => {
  return resolveP("a")
    .then((value) => equal(value, "a"))
})
