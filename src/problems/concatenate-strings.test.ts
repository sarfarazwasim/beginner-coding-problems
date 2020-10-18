import { concatenateStrings } from './concatenate-strings';

describe("concatenate-strings", () => {
  it("Should return strings into one sentence", () => {
    // Arrange
    const string1 = "I";
    const string2 = "love";
    const string3 = "javascript";

    // Act
    const result = concatenateStrings(string1, string2, string3);

    // Assert
    expect(result).toBe("I love javascript");
  });
});
