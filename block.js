import { randomUUID } from 'crypto'

export class Block {
    #id
    #previousBlock
    #data

    constructor() {
        this.#id = randomUUID()

        return this
    }

    getPreviousBlock() {
        return this.#previousBlock
    }

    setPreviousBlock(previousBlock) {
        this.#previousBlock = previousBlock

        return this
    }

    getData() {
        return this.#data
    }

    setData(data) {
        this.#data = data

        return this
    }

    getId() {
        return this.#id
    }

    getBlock() {
        return {
            id: this.#id,
            data: this.getData(),
            previousBlock: this.#previousBlock
        }
    }
}