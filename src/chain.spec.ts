import Chain from "./chain";
import Block from "./block";

describe("Chain", () => {
  const chain: Chain = new Chain();;


  it("should have a ledger that is an array", () => {
    expect(chain.ledger).toBeInstanceOf(Array);
  });

  it("should have each ledger item as an instance of `Block`", () => {
    expect(chain.ledger[0]).toBeInstanceOf(Block);
  });

  it("should have the genesis block as the first entry in the ledger", () => {
    const genesisBlock = Block.genesisBlock();
    expect(chain.ledger[0]).toEqual(genesisBlock);
  });

  it("should be able to add new block to the ledger", () => {
    const data = "SAMPLE_DATA";
    const newBlock = chain.addBlock(data);
    expect(chain.ledger).toContain(newBlock);
  });

  describe("addblock()", () => {
    const spyAddBlock = jest.spyOn(chain, "addBlock");
    const newBlock = chain.addBlock(expect.any(String));

    it("should take string data as input", () => {
      expect(spyAddBlock).toHaveBeenCalledWith(expect.any(String));
    });

    it("should return an instance of `Block`", () => {
      expect(newBlock).toBeInstanceOf(Block);
    });
  });

  describe("isValid()", () => {
    describe("when chain does not begin with the genesis block", () => {
      it("should return false", () => {
        const firstBlock: Block = {
          version: 1,
          time: +new Date(),
          hashPrevBlock: "SAMPLE-HASH",
          hashMerkleRoot: "SAMPLE-CURRENT-HASH",
          data: "SAMPLE-DATA",
        }
        chain.ledger[0] = firstBlock;
        const result: boolean = Chain.isValid(chain.ledger);
        expect(result).toBe(false);
      });
    });

    describe("when chain begins with the genesis block", () => {
      it("should return true", () => {
        const firstBlock: Block = Block.genesisBlock();
        chain.ledger[0] = firstBlock;
        const result: boolean = Chain.isValid(chain.ledger);
        expect(result).toBe(true);
      });
    });

    describe("when `hashPrevBlock` of current block is not same as `hashMerkleRoot` of last block", () => {
      it("should return false", () => {
        chain.addBlock(expect.any(Block));
        chain.addBlock(expect.any(Block));
        chain.ledger[1].hashMerkleRoot = "MODIFIED_HASH";
        const result: boolean = Chain.isValid(chain.ledger);
        expect(result).toBe(false);
      });
    });
  });
});