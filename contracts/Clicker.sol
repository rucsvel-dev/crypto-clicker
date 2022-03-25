//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Clicker {
    mapping(address => bool) private initedUsers;
    mapping(address => uint256) private balances;
    mapping(address => uint256) private valuePerClick;
    mapping(address => uint256) private costToUpValuePerClickV1;
    mapping(address => uint256) private costToUpValuePerClickV2;

    event ValueChanged(uint256 indexed newValue);
    event UserInited(address indexed userAddress);

    function initUser() public {
        valuePerClick[msg.sender] = 1;
        costToUpValuePerClickV1[msg.sender] = 5;
        costToUpValuePerClickV2[msg.sender] = 10;

        initedUsers[msg.sender] = true;

        emit UserInited(msg.sender);
    }

    function getUserData() public view returns (uint256, uint256, uint256, uint256) {
        return (balances[msg.sender], valuePerClick[msg.sender], costToUpValuePerClickV1[msg.sender], costToUpValuePerClickV2[msg.sender]);
    }

    function click() public {
        uint256 newValue = valuePerClick[msg.sender];

        balances[msg.sender] += newValue;
        emit ValueChanged(newValue);
    }
}
