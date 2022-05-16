//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Clicker {
    string[] userPosts;

    event PostAdded(string indexed postId);

    function getPostsData() public view returns (string[] memory) {
        return userPosts;
    }

    function addPosts(string memory archaveId) public {
        userPosts.push(archaveId);

        emit PostAdded(archaveId);
    }
}
