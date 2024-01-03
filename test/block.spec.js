import { describe, beforeEach } from "mocha";
import assert from 'assert'
import { Block } from "../src/block.js";

describe("Test case - Block", function () {
    let block = null
    before(() => {
        block = new Block()
    })

    it("create new block empty", function () {
        assert.notEqual(block, null)
    })

    it("test if block was created", () => {
        assert.notEqual(block.getId(), '', block.getId())
    })

    it("create new block content", () => {
        block.setData('conteúdo do bloco: ' + new Date().getTime())
        assert.equal(block.getData(), 'conteúdo do bloco: ' + new Date().getTime())
    })

    it("check block", () => {
        assert.notEqual(block.getBlock(), null)
    })


})