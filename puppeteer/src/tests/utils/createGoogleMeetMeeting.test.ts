import { assertEquals } from "../../deps.ts";
import generateUniqueKey from "../../utils/generateUniqueKey.ts";

Deno.test("when normal", () => {
  const uniqueKeys = Array.from({ length: 1000 }, (i) => i).map(() =>
    generateUniqueKey()
  );
  assertEquals(
    uniqueKeys.every((uk) => uk.length === 11),
    true,
  );
});
