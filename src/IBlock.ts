export default interface IBlock {
  time: number;
  version: number;
  hashPrevBlock: string;
  hashMerkleRoot: string;
};