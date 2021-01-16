import IBlock from "./IBlock";
import Block from "./block";
import { GENESIS_BLOCK } from "../config";

describe("Block", () => {
  const version: number = 1;
  const time: number = +new Date();
  const hashPrevBlock: string = "0000000000000000000000000000000000000000000000000000000000000000";
  const hashMerkleRoot: string = "3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A";
  const data: string = "The Times 23/Oct/2020 People Fear a Market Crash More Than They Have in Years";
  const blockToAdd: IBlock = {
    version,
    time,
    hashPrevBlock,
    hashMerkleRoot,
    data,
  };

  const block = new Block(blockToAdd);

  it("should have a version, time, previous hash, current hash and data", () => {
    expect(block.version).toEqual(version);
    expect(block.time).toEqual(time);
    expect(block.hashPrevBlock).toEqual(hashPrevBlock);
    expect(block.hashMerkleRoot).toEqual(hashMerkleRoot);
    expect(block.data).toEqual(data);
  });

  describe("genesisBlock()", () => {
    const genesisBlock = Block.genesisBlock();
    it("should return an instance of Block", () => {
      expect(genesisBlock).toBeInstanceOf(Block);
    });

    it("should be same as the pre-defined genesis data", () => {
      expect(genesisBlock).toMatchObject(GENESIS_BLOCK);
    });
  });

  describe("mineBlock()", () => {
    const prevBlock = Block.genesisBlock();
    const data = "SAMPLE_DATA";
    const minedBlock = Block.mineBlock(prevBlock, data);

    it("should return an instance of Block", () => {
      expect(minedBlock).toBeInstanceOf(Block);
    });

    it("should create a block whose `hashPrevBlock` is same as `hash` of the previous block", () => {
      expect(minedBlock.hashPrevBlock).toEqual(prevBlock.hashMerkleRoot);
    });
  })
});