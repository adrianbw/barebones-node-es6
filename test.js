const Utils = require("./Utils");
const assert = require("assert");

describe("Unit tests", () => {
  it("should return success", done => {
    const string = Utils.test();
    console.log(string);
    assert.equal(string, "success");
    done();
  });
});
