const BlockChain = require('./BlockChain')

const blockChain = new BlockChain()

for (let i = 0; i < 10; i++) {
  blockChain.add('data ' + i)
}
blockChain.chain[2].data = 'sua roi haha'

console.log(blockChain.get(2).data)

console.log(blockChain.verify())
