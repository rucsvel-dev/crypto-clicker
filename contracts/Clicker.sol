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
    event ValuePerClickUpgraded(uint256 indexed userAddress);

    modifier onlyInitedUser() {
        require(initedUsers[msg.sender] == true, "Only inited users can do it");
        _;
    }

    modifier onlyNotInitedUser() {
        require(initedUsers[msg.sender] == false, "Only not inited users can do it");
        _;
    }

    function initUser() public onlyNotInitedUser {
        valuePerClick[msg.sender] = 1;
        costToUpValuePerClickV1[msg.sender] = 5;
        costToUpValuePerClickV2[msg.sender] = 10;

        initedUsers[msg.sender] = true;

        emit UserInited(msg.sender);
    }

    function getUserData() public view onlyInitedUser returns (uint256, uint256, uint256, uint256) {
        return (balances[msg.sender], valuePerClick[msg.sender], costToUpValuePerClickV1[msg.sender], costToUpValuePerClickV2[msg.sender]);
    }

    function click() public onlyInitedUser {
        uint256 newValue = valuePerClick[msg.sender];

        balances[msg.sender] += newValue;
        emit ValueChanged(newValue);
    }

    function upgradeValuePerClick(string memory variation) public onlyInitedUser {
        if(keccak256(abi.encodePacked((variation))) == keccak256(abi.encodePacked(('V1')))) {
            require(costToUpValuePerClickV1[msg.sender] <= balances[msg.sender], "not enough tokens to upgrade first variation");

            balances[msg.sender] -= costToUpValuePerClickV1[msg.sender];
            costToUpValuePerClickV1[msg.sender] *= 2;
            valuePerClick[msg.sender] += 1;
        }

        if(keccak256(abi.encodePacked((variation))) == keccak256(abi.encodePacked(('V2')))){
            require(costToUpValuePerClickV1[msg.sender] <= balances[msg.sender], "not enough tokens to upgrade second variation");

            balances[msg.sender] -= costToUpValuePerClickV2[msg.sender];
            costToUpValuePerClickV2[msg.sender] *= 2;
            valuePerClick[msg.sender] += 2;
        }

        emit ValuePerClickUpgraded(valuePerClick[msg.sender]);
    }
}
