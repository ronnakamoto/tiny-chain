import IBlock from "./IBlock";

export default class Block {
  time: number;
  version: number;
  hashPrevBlock: string;
  hashMerkleRoot: string;
  data: any;

  constructor(block: IBlock) {
    this.version = block.version;
    this.time = block.time;
    this.hashPrevBlock = block.hashPrevBlock;
    this.hashMerkleRoot = block.hashMerkleRoot;
    this.data = block.data;
  }
}