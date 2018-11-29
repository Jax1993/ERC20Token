var token = artifacts.require("./TestCoin.sol");

module.exports = function(deployer) {
    deployer.deploy(token);
};
