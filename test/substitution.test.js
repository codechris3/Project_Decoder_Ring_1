// Write your tests here!

const expect = require("chai").expect;
const caesar = require("../src/substitution.js");

describe("substitution", () => {
  it("returns false if the given alphabet isn't exactly 26 characters long", () => {
    const expected = false;
    const actual = substitution("thinkful", "oyqmcgrukswaflnthdjpzibev");
    expect(actual).to.eql(expected);
  });
  it("it correctly translates the phrase", () => {
    const expected = "jrufscpw";
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.eql(expected);
  });
  it("it returns false if there are any duplicate characters in the given alphabet", () => {
    const expected = false;
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.eql(expected);
  });
  it("should ignore capital letters", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    expect(actual).to.eql(expected);
  });
  it("should maintain spaces", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    expect(actual).to.eql(expected);
  });
  it("should decode a message", () => {
    const expected = "thinkful";
    const actual = substitution(
      "jrufscpw",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    expect(actual).to.eql(expected);
  });
});
