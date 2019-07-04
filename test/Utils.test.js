import { test } from "../src/Utils";
import assert from "assert";

describe("Unit tests", () => {
  it('string should be "success"', done => {
    const string = test();
    console.log(string);
    assert.equal(string, "success");
    done();
  });
});
