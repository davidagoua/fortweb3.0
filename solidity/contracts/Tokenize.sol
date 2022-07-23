pragma solidity ^0.8.9;

contract Token {

    string public name = "Fortest tokenable";
    string public symbole = "FTT";

    uint256 public totalSupply = 1000;

    address public owner;

    mapping(address => uint256) balances;

    event Transfert (address indexed _from, address indexed _to, uint256 amount);

    constructor(){

        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfert(address payable to, uint256 amount) external {

        require(balances[msg.sender] >= amount, "Fond insuffisant");

        balances[msg.sender] -= amount;
        balances[to] += amount;

        emit Transfert(msg.sender, to, amount);

    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }

}


