pragma solidity ^0.4.2;

import "./ERC20/PausableToken.sol";
import "./ERC20/DetailedERC20.sol";

contract TestCoin is PausableToken, DetailedERC20 {

    constructor() DetailedERC20("CaptainCoin", "CTC", 18) public {
        totalSupply_ = 1000000000 * 10 ** 18;
        balances[msg.sender] = totalSupply();
    }

}

