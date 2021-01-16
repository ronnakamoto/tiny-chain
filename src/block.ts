import IBlock from "./IBlock";
import { GENESIS_BLOCK } from "../config";
import generateHash from "./generateHash";

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
    const time: number = +new Date();
    const hashPrevBlock: string = prevBlock.hashMerkleRoot;
    const hashMerkleRoot: string = generateHash(JSON.stringify({
      hashPrevBlock,
      data,
      time,
    }));
    
    const block: IBlock = {
      version: prevBlock.version,
      time,
      hashPrevBlock,
      hashMerkleRoot,
      data,
    }
    return new this(block);
  }
}