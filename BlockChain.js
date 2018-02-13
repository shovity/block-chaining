const crypto = require('crypto')
const Block = require('./Block')

class BlockChain {
  constructor() {
    this.chain = [new Block({ index: 0, data: 'genesis block', previousHash: '' })]
  }

  add(data) {
    const lastBlock = this.chain[this.chain.length-1]

    this.chain.push(new Block({
      index: lastBlock.index+1,
      data,
      previousHash: lastBlock.hash
    }))
  }

  get(index) {
    return this.chain[index]
  }

  load(chain) {
    this.chain = chain
  }

  verify() {
    for (let i = 0, l = this.chain.length; i < l; i++) {
      if (!this.chain[i].verify()) return false
      if (i !== l-1 && this.chain[i].hash !== this.chain[i+1].previousHash) return false
    }
    return true
  }
}

module.exports = BlockChain
