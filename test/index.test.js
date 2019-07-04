import { find } from "lodash";
import { assert } from "chai";

const objs = [{ a: 1, b: 2 }, { a: 2, b: 1 }];

describe("Basic setup tests", () => {
  it("Has sucessfully imported lodash", () => {
    const obA = find(objs, ["a", 1]);
    assert.isOk(obA);
  });
});
