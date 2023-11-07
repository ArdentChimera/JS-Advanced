const { isSymmetric } = require("./checkSymmetry");
const assert = require("chai").assert;
const expect = require("chai").expect;

describe("isSymmetric", () => {
  it("should be true for symmetric arrays of strings", () => {
    let checkSymetry = isSymmetric(['a', 'b', 'b', 'a']);
    expect(checkSymetry).to.be.equal(true);
  });

  it("should be true for symmetric arrays of numbers", () => {
    let checkSymetry = isSymmetric([5, 2, 2, 5]);
    expect(checkSymetry).to.be.equal(true);
  });

  it("should be false if the input is not an array", () => {
    let checkSymetry = isSymmetric("abba");
    expect(checkSymetry).to.be.false;
  });

  it("should be false for non-summetric arrays of strings", () => {
    let checkSymetry = isSymmetric(['a', 'b', 'c', 'd']);
    expect(checkSymetry).to.be.false;
  });

  it("should be false for non-summetric arrays of numbers", () => {
    let checkSymetry = isSymmetric([5, 6, 2, 34]);
    expect(checkSymetry).to.be.false;
  });

  it("should be false for no input", () => {
    let checkSymetry = isSymmetric();
    expect(checkSymetry).to.be.false;
  });
});
