const TestCoin = artifacts.require("./TestCoin.sol");

contract("TestCoin", (accounts) => {

    let testCoin;

    beforeEach(async () => {
        testCoin = await TestCoin.new();
        await testCoin.transfer(accounts[3], 10000000000000000000000);//10000
        await testCoin.approve(captain.address, 10000000000000000000000, {from: accounts[3]});
    });

});