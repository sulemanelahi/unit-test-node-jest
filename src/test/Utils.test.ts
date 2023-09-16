import { toUpperCase, getStringInfo } from "../app/Utils";

describe("Utils Test Suite", () => {
  it("should return uppercase characters", () => {
    const alphabets = "abc";
    const expected = alphabets.toUpperCase();

    const result = toUpperCase(alphabets);

    expect(result).toEqual(expected);
  });

  it("should return info for valid string", () => {
    const characters = "My-String";

    const result = getStringInfo(characters);

    // Check if 'lowerCase' property is equal to "my-string" for primitive types
    expect(result.lowerCase).toBe("my-string");

    // Check if 'extraInfo' property is an empty object for non-primitive types
    expect(result.extraInfo).toEqual({});

    // Check the length of the 'characters' array
    expect(result.characters.length).toBe(9);
    // A cleaner way to check the length of the array
    expect(result.characters).toHaveLength(9);

    // Check if the 'characters' array has elements in a specific order
    expect(result.characters).toEqual(["M", "y", "-", "S", "t", "r", "i", "n", "g"]);

    // Check if the 'characters' array contains the element "M"
    expect(result.characters).toContain("M");

    // Check if the 'characters' array contains some specified elements in any order
    expect(result.characters).toEqual(
      expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"])
    );

    // Check that 'extraInfo' is not undefined
    expect(result.extraInfo).not.toBeUndefined();
    // A cleaner way to check that 'extraInfo' is not undefined
    expect(result.extraInfo).toBeDefined();
    // Check if 'extraInfo' is truthy, useful when unsure about its structure
    expect(result.extraInfo).toBeTruthy();
  });
});
