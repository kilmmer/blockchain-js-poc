import { randomUUID } from "crypto"
import { Block } from "./block.js"

export class Chain {
    #id
    #blockchain = []

    constructor() {
        this.#id = new randomUUID()

        console.log(this.#blockchain)
    }

    newBlock(data = null) {
        const newBlock = new Block()

        newBlock.setData(data)

        newBlock.setPreviousBlock = this.#blockchain.length > 0 ? this.#blockchain[this.#blockchain.length - 1].getId() : null

        this.#blockchain.push(newBlock)
    }

    getBlock(id) {
        return this.#blockchain.filter(block => block.id === id)[0]
    }

    getBlockchain() {
        return { id: this.#id, blockchain: this.#blockchain }
    }

    getLastBlock() {
        const lastIndex = this.getBlockchain().length ?? 0

        return this.#blockchain[lastIndex]
    }

    findData(data) {
        const searchData = this.#blockchain.filter(block => block.data === data)

        return searchData[0] ?? []
    }

    validateChain() {
        const chain = this.getBlockchain()
        const chainLength = chain.length
        const lastBlock = chain[chainLength - 1]
        const lastBlockHash = lastBlock.id
        const lastBlockPreviousHash = lastBlock.previousHash
        const lastBlockIndex = lastBlock.index
        const lastBlockTimestamp = lastBlock.timestamp
        const lastBlockNonce = lastBlock.nonce

        for (let i = chainLength - 1; i > 0; i--) {
            const block = chain[i]
            const blockHash = block.hash
            const blockPreviousHash = block.previousHash
            const blockIndex = block.index
            const blockTimestamp = block.timestamp
            const blockNonce = block.nonce

            if (blockHash !== blockPreviousHash) {
                return false
            }
            if (blockPreviousHash !== lastBlockHash) {
                return false
            }
            if (blockIndex !== lastBlockIndex + 1) {
                return false
            }
            if (blockTimestamp <= lastBlockTimestamp) {
                return false
            }
            if (blockNonce !== lastBlockNonce) {
                return false
            }

            lastBlockHash = blockHash
            lastBlockIndex = blockIndex
            lastBlockTimestamp = blockTimestamp
            lastBlockNonce = blockNonce
        }
        return true
    }

}