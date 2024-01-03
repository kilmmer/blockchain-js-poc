import { describe, it, before } from "mocha";
import assert from 'assert'
import { Chain } from "../src/chain.js";


describe("Test case - Chain", () => {
    let chain = null

    before(() => {
        chain = new Chain()
    })

    it('should create a new chain', () => {
        assert.notEqual(chain, null, 'new chain created ok.')
    })

    it("should list blocks", () => {
        assert.notEqual(chain.getBlockchain(), null)
    })

    it('get blocks of chain', () => {
        assert.notEqual(chain.getBlockchain(), 0, 'chain is empty')
    })

    it("should add block to the chain", () => {
        chain.newBlock(new Date())
        chain.newBlock(new Date())
        chain.newBlock(new Date())
    })

    it("should list blocks", () => {
        chain.getBlockchain()
    })
})