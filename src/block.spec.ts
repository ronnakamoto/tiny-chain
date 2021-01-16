import IBlock from "./IBlock";
import Block from "./block";

describe("Block", () => {
  const version: number = 1;
  const time: number = +new Date();
  const hashPrevBlock: string = "0000000000000000000000000000000000000000000000000000000000000000";
  const hashMerkleRoot: string = "3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A";
  const data: string = "The Times 23/Oct/2020 People Fear a Market Crash More Than They Have in Years";
  const block: IBlock = {
    version,
    time,
    hashPrevBlock,
    hashMerkleRoot,
    data,
  };

  const result = new Block(block);

  it("should have a version, time, previous hash, current hash and data", () => {
    expect(result.version).toEqual(version);
    expect(result.time).toEqual(time);
    expect(result.hashPrevBlock).toEqual(hashPrevBlock);
    expect(result.hashMerkleRoot).toEqual(hashMerkleRoot);
    expect(result.data).toEqual(data);
  })
});