import { greet } from "./greet";

describe("greet", () => {
  it("Should return hello and your name", () => {
    // Arrange
    const name = "Steve";

    // Act
    const result = greet(name);

    // Assert
    expect(result).toBe("Hello Steve!");
  });
});
