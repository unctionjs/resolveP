
import {test} from "tap";

import resolveP from "./";

test(({equal}) => {
  return resolveP("a")
    .then((value) => equal(value, "a"));
});
