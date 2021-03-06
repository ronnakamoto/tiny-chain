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

  static isValid(ledger: Block[]): boolean {
    const genesisBlock: Block = Block.genesisBlock();
    if (ledger[0].hashMerkleRoot != genesisBlock.hashMerkleRoot) {
      return false;
    }

    for (let length: number = ledger.length, index: number = length - 1; index > 0; index--) {
      if (ledger[index].hashPrevBlock !== ledger[index - 1].hashMerkleRoot) {
        return false;
      }
    }
    return true;
  }
}