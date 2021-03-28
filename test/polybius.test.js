// Write your tests here!

const expect = require("chai").expect;
const polybius = require("../src/polybius.js");

describe("polybius", () => {
  it("when encoding, it translates the letter i to 42", () => {
    const expected = "42";
    const actual = polybius("i");
    expect(actual).to.eql(expected);
  });
  it("when encoding, it translates the letter j to 42", () => {
    const expected = "42";
    const actual = polybius("j");
    expect(actual).to.eql(expected);
  });
  it("when decoding, it translates 42 to (i/j)", () => {
    const expected = "(i/j)";
    const actual = polybius("42", false);
    expect(actual).to.eql(expected);
  });
  it("it ignores capital letters", () => {
    const expected = "3251131343 2543241341";
    const actual = polybius("Hello world");
    expect(actual).to.eql(expected);
  });
  it("it maintains spaces", () => {
    const expected = "3251131343 2543241341";
    const actual = polybius("Hello world");
    expect(actual).to.eql(expected);
  });
  it("should decode a message", () => {
    const expected = "hello world";
    const actual = polybius("3251131343 2543241341", false);
    expect(actual).to.eql(expected);
  });
});
