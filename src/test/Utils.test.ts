import toUpperCase from "../app/Utils";

describe("Utils Test Suite", () => {
  it("should return uppercase characters", () => {
    const result = toUpperCase("ABC");

    expect(result).toEqual("ABC");
  });
});
