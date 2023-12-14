import { Chain } from "./chain.js";

class Main {
    chains = []

    constructor() {

    }

    listChain() {

    }

    newChain() {
        const newChain = new Chain()

        const qtdChains = (Math.random() * 9).toFixed(0)

        for (let i = 0; i < (qtdChains * 2); i++) {
            newChain.newBlock(`${i}${qtdChains}${i + qtdChains}`)
        }

        this.chains.push(newChain)
    }



}


const main = new Main()

main.newChain()
main.newChain()
main.newChain()
main.newChain()
main.newChain()

main.listChain()



