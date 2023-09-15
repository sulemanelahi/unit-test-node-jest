import toUpperCase from "../app/Utils";

describe("Utils Test Suite", () => {
  it("should return uppercase characters", () => {
    const alphabets = "abc";
    const expected = alphabets.toUpperCase();

    const result = toUpperCase(alphabets);

    expect(result).toEqual(expected);
  });
});
