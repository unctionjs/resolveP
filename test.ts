
import resolveP from "./index.ts";

test(() => {
  return resolveP("a")
    .then((value) => expect(value).toBe("a"));
});
