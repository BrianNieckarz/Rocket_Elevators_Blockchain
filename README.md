# RocketElevators Blockchain NFT

Generating RocketElevatorsNFT and IPFS code


## Application Requirements

-   [Node.js](https://nodejs.org/en/download/) (v.16.15.0)
-   [npm](https://nodejs.org/en/download/)  (v.8.8.0)
    -   [web3.storage@3.5.7](https://www.npmjs.com/package/web3.storage)
    -   [process@0.11.10](https://www.npmjs.com/package/process)
    -   [minimist@1.2.6](https://www.npmjs.com/package/minimist)
    -   [express@4.18.1](https://www.npmjs.com/package/express)
    -   [canvas@2.9.1](https://www.npmjs.com/package/canvas)
-   [IPFS Desktop](https://docs.ipfs.io/install/ipfs-desktop/#windows) (optional)
-   [Web3.storage api token](https://web3.storage/login/)

## Description

Generate a RocketELevatorsNFT that is stored on IPFS.


## Usage

Create your web3.storage account and generate an api token.

Use this command to generate the NFT and the Content Identifier (CID)
-   node index.mjs --token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGI5YTY2NDgxNWJiNEY2ODVGRjUyNkM2YmNhMDY0OGYwNjVmMzI3MDgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTE4NTI2NTEwNjIsIm5hbWUiOiJSb2NrZXRFbGV2YXRvcnNORlQifQ.-fUnqgHhoHnmHGYb_RUyqgIaPmQZKEopNXh3yMe6YYY build\1.png build\_metadata.json

This will generate the image, the metadata and the Content Identifier that goes along with it. You may access it with the CID via IPFS Desktop or following this link format: https://dweb.link/ipfs/YOUR_CID

## Credits

This project was made possible through the support of:

-   Perry Sawatzky
-   Mathieu Houde
-   Patrick Thibault
-   Francis Patry-Jessop
-   CodeBoxx School of Technology Community
