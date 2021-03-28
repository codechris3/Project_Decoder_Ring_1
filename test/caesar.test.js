// Write your tests here!// Write your tests here!

const expect = require("chai").expect;
const caesar = require("../src/caesar.js");

describe("caesar", () => {
  it("should return false if the shift value is not present", () => {
    const input = "Thinkful";
    const expected = false;
    const actual = caesar(input);
    expect(actual).to.eql(expected);
  });
  it("should return false if the shift value is greater than 25", () => {
    const expected = false;
    const actual = caesar("Thinkful", 99);
    expect(actual).to.eql(expected);
  });
  it("should return false if the shift value is less than -25", () => {
    const expected = false;
    const actual = caesar("Thinkful", -99);
    expect(actual).to.eql(expected);
  });
  it("should ignore capital letters", () => {
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesar("This is a secret message!", 8);
    expect(actual).to.eql(expected);
  });
  it("should maintain spaces", () => {
    const expected = "this is a secret message!";
    const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
    expect(actual).to.eql(expected);
  });
  it("should decode a message", () => {
    const expected = "thinkful";
    const actual = caesar("wklqnixo", 3, false);
    expect(actual).to.eql(expected);
  });
});
