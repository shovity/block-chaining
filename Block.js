const crypto = require('crypto')

class Block {
  constructor({ index, timestamp, data, previousHash }) {
    this.index = index
    this.timestamp = timestamp || Date.now()
    this.data = data
    this.previousHash = previousHash
    this.hash = this.hashing()
  }

  hashing() {
    const hasher = crypto.createHash('SHA256')
    return hasher
      .update(this.index.toString())
      .update(this.timestamp.toString())
      .update(JSON.stringify(this.data))
      .update(this.previousHash)
      .digest('hex')
  }

  verify() {
    return this.hash === this.hashing()
  }
}

module.exports = Block
