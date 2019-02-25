# ERC20

The standard implementation of ERC20 token.

	import "./ERC20/PausableToken.sol";
	import "./ERC20/DetailedERC20.sol";

	contract TestCoin is PausableToken, DetailedERC20 {
		constructor() DetailedERC20("CaptainCoin", "CTC", 18) public {
			totalSupply_ = 1000000000 * 10 ** 18;
			balances[msg.sender] = totalSupply();
		}
	}
	
# 不要脸的注释

这是强哥写的， 我是拖过来做一个随手工具。
