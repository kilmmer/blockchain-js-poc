import { describe, it, before } from "mocha";
import assert from 'assert'
import { Chain } from "../chain.js";
import { Block } from "../block.js";

describe("Test case - Chain", () => {
    let chain = null

    before(() => {
        chain = new Chain()
    })

    it('should create a new chain', () => {
        assert.notEqual(chain, null, 'new chain created ok.')
        console.log(chain)
    })

    it("should list blocks", () => {
        console.log(chain.getBlockchain())
    })

    it('get blocks of chain', () => {
        assert.equal(chain.getBlockchain(), 0, 'chain is empty')
    })

    it("should add block to the chain", () => {
        chain.newBlock(new Date())
        chain.newBlock(new Date())
        chain.newBlock(new Date())
    })

    it("should list blocks", () => {
        console.log(chain.getBlockchain())
    })
   
})