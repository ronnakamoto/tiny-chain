import IBlock from "./IBlock";
import { GENESIS_BLOCK } from "../config";

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

  static genesisBlock(): Block {
    return new this(GENESIS_BLOCK); 
  }

  static mineBlock(prevBlock: IBlock, data: any): Block {
    const block: IBlock = {
      version: prevBlock.version,
      time: +new Date(),
      hashPrevBlock: prevBlock.hashMerkleRoot,
      hashMerkleRoot: "PLACEHOLDER_HASH",
      data,
    }
    return new this(block);
  }
}