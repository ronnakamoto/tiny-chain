<h1 align="center">𝙸𝚗𝚝𝚛𝚘𝚍𝚞𝚌𝚒𝚗𝚐 𝚃𝚒𝚗𝚢 𝙲𝚑𝚊𝚒𝚗 </br></br><img src="./tiny-chain.png" /></h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <img alt="Travis (.com)" src="https://img.shields.io/travis/com/ubuntugod/tiny-chain?style=flat-square&logo=travis">
  <a href='https://coveralls.io/github/ubuntugod/tiny-chain?branch=master'><img src='https://coveralls.io/repos/github/ubuntugod/tiny-chain/badge.svg?branch=master' alt='Coverage Status' /></a>
</p>

> Tiny Chain is a tiny blockchain, based on NodeJS and TypeScript that will feature pluggable consensus mechanisms.

## Scope

Tiny Chain is a layer-1 blockchain that will be a completely programmable public blockchain with the ability to bring in custom pluggable consensus mechanism in addition to the default ones.

Ease of programming smart contracts using TypeScript inspired language(**TinyLang**) will be the focus on the programmable aspect of the blockchain. TinyLang can run on a secured sandboxed Virtual Machine - **Tiny Virtual Machine(TVM)**.

Additionally, data from oracles can be onloaded via ChainLink while data from the chain can be exposed via Graph APIs and gRPC.

**Chain Connectors** are plugins that will define interfaces/facades that will allow Tiny Chain to communicate with other blockchains including Bitcoin, Ethereum, NEO and Comsos.

**Chain Notifiers** are plugins that will allow dApp developers to send notifications off-chain based on events that occur on-chain.

## Installation

```sh
yarn install
```

## Run Tests

```sh
yarn run test
```

## Show Your Support

Give a ⭐️ if this project helped you!
