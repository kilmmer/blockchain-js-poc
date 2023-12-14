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

}