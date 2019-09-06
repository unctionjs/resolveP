
import resolveP from "./index";

test("works", () => {
  return resolveP("a")
    .then((value) => expect(value).toBe("a"));
});
