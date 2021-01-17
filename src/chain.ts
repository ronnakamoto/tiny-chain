import Block from "./block";

export default class Chain {

  ledger: Block[];

  constructor() {
    this.ledger = [
      Block.genesisBlock(),
    ];
  }

  addBlock(data: string): Block {
    const prevBlock: Block = this.ledger[this.ledger.length - 1];
    const newBlock: Block = Block.mineBlock(prevBlock, data);
    this.ledger.push(newBlock);
    return newBlock;
  }
}