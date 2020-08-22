const SimplePOS = artifacts.require("SimplePOS")
const MockUniswapExchange = artifacts.require("MockUniswapExchange")

const { toEth } = require('../utils/testUtils')

contract("SimplePOS", accounts => {

    it("weird revert", async () => {
        let exchange = await MockUniswapExchange.new()
        let initialEthValue = toEth(0.1)
        let contract = await SimplePOS.new(exchange.address, "MyToken", "simMTKN", 1, 500, 5000, { value: initialEthValue })

        await web3.eth.sendTransaction({from: accounts[1], to: contract.address, value: toEth(1)})
    })
})
