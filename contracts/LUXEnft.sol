// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract LUXEnft is ERC721, Ownable {

    constructor() payable ERC721('LUXEnft', 'RP') {

    }

}