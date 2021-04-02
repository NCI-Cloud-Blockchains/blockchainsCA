# Sabesan Blockchain CA
This repo will contain all necessary files for blockchains CA project work. <br /> 

The project requirements and expectations are as follows, <br /> 

**Overview**
For this assignment, each individual student will issue an Ethereum ERC20 token on the a Blockchain Ethereum testnet and provide a code-based mechanism to perform basic token distributions. <br /> 

**Requirements**
Create an Ethereum account (public/private secp256k1 keypair with associated address) on Ethereum Test Net network with at least 100bits of entropy.

1. **Create an ERC20-compliant, fixed-supply token with the following parameters:** <br /> 
  ● Total supply of 1 million tokens. <br /> 
  ● 18 decimal places per token. <br /> 
  ● Token owner to be the Ethereum account above. <br /> 
  ● Name and description to be determined by student. <br /> 
2. **Deploy the token contract to the Ropsten/Rinkeby test network. Blockchain Concepts & Technologies 2021** <br /> 
3. **Build a Node.js application capable of accepting a file containing the following data:** <br /> 
  ● Eth_address01 <br /> 
  ● ... <br /> 
  ● Eth_addressN <br /> 
**The Node application should be capable of performing the following activities:** <br /> 
  ● Process the file and count the number of entries <br /> 
  ● Calculate the total supply of tokens remaining <br /> 
  ● Distribute 5% of the total supply equally between each of the ETH addresses in the file. (e.g. if 100 tokens remain, 5 tokens get distributed into the N accounts in the file - 10 accounts means each get 0.5 tokens) <br /> 
  ● Each distribution to be executed on the Ethereum test network. <br /> 
  
**Required Assignment Output:** <br /> 
  ● Address of contract on Ethereum Test Net <br /> 
  ● Contract Solidity Code (including libraries and interfaces) <br /> 
  ● Ethereum Test Net ETH Address of Token Owner <br /> 
  ● Node.JS application interacting with Ethereum TestNet to perform token distribution <br /> 
  ● Docker File containing application code <br /> 
  ● Docker Hub URL of dockerised project <br /> 
  ● Report Submission <br /> 
  ● Pre-Recorded Video Presentation <br /> 

**Code & Documentation outputs to be provided in a single zip file in Moodle** <br /> 
If Github is used, then a github commit URL can be posted to Moodle, along with any required documentation outputs above. <br /> 
Ensure that the lecturer has access to the GitHub repository!
5%  - Setting up Ethereum account <br /> 
15% - Deploying ERC20 contract to Ethereum Test Net <br /> 
25% - Building Node.js application to process token distribution file <br /> 
5%  - Providing complete code from private repo in Github and or Moodle .zip <br /> 
10% - Providing complete and clear readme.md instructions for execution in Github repository and or Moodle .zip <br /> 
10% - Providing Node.js application in Docker container <br /> 
5%  - Making Docker container available on Docker Hub <br /> 
20% - Providing 3-page report on process of development of contract and setting up of accounts across the platform. <br /> 
      • Introduction explaining the tools being used and their purpose. <br /> 
      • Document the Setup and configuration of said tools. <br /> 
      • Describe the process of operations between each of the components at use throughout the project <br /> 
      • Encapsulate the Use and Purpose of Smart Contracts as demonstrated in your project work. <br /> 
5%  - 5-7 Min Pre-recorded Demonstration displaying the operation of the contract. <br /> 
