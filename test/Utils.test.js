import { test } from "../src/Utils";
import { assert } from "chai";

describe("Unit tests", () => {
  it('string should be "success"', () => {
    const string = test();
    console.log(string);
    assert.equal(string, "success");
  });
});
