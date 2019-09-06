
import resolveP from "./index";

test(() => {
  return resolveP("a")
    .then((value) => expect(value).toBe("a"));
});
