import generateHash from "./generateHash";

jest.mock("./generateHash");

describe("generateHash()", () => {
  const data = "SAMPLE_DATA";
  const expectedHash = "b7143693d92a5269344d44cdedd85d516f420e15095f5993e5c8b1a6d39726db";

  const toString = jest.fn().mockReturnValue(expectedHash);
  const keccak256 = jest.fn().mockImplementation(() => ({
      toString, 
  }));

  const generateHash = jest.fn().mockImplementation((data) => {
    return keccak256(data).toString("hex");
  });

  const hash = generateHash(data);

  it("should be invoked with the data to hash", () => {
    expect(generateHash).toHaveBeenCalledWith(data);
  });

  it("should call keccak256 to help with hashing", () => {
    expect(keccak256).toHaveBeenCalledWith(data);
  });

  it("should return keccak256 hash of the data", () => {
    expect(hash).toEqual(expectedHash);
  });

  it("should call `toString` with `hex`", () => {
    expect(keccak256(data).toString).toHaveBeenCalledWith("hex");
  });
})