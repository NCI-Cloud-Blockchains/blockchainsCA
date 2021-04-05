# Sabesan Blockchain CA
This repo contains all necessary files for blockchains CA project work. <br /> 

The project requirements and expectations are as follows, <br /> 

<b> Overview: </b> </br>
For the given blockchain assignment, an ERC20 token was deployed on the a Blockchain Ethereum test network, a code-based mechanism is deployed as docker image to perform basic token distributions for given ethereum addresses in the json data file. </br>

Following tasks were completed and related artefacts can be seen in mentioned respective locations

1. **Create an ERC20-compliant - This contract's source code can be found inside contracts folder** <br /> 
2. **Deploy the token contract to the Ropsten/Rinkeby test network - <a href="https://ropsten.etherscan.io/address/0xf6042a75d2834428f0d05a0aff8133d78fdaec0c"> link </a> to the deployed contract** <br /> 
3. **Build a Node.js application capable of accepting a file containing the following data - This scirpt can be found inside scripts folder and ethereum addresses should be listed in the location, data/ethereumAddresses.json** <br /> 
  
**Required Assignment Output:** <br /> 
    ● Address of contract on Ethereum Test Net: <b> <a href="https://ropsten.etherscan.io/address/0xf6042a75d2834428f0d05a0aff8133d78fdaec0c"> Link </a> to the deployed contract </b> </br>
    ● Contract Solidity Code (including libraries and interfaces): <b> Contract inside the contracts folder </b> <br /> 
    ● Ethereum Test Net ETH Address of Token Owner: <b> Ethereum address of token owner - 0x4C5E628C858A9728247AC9e93D2eB3605244C50a </b> <br /> 
    ● Node.JS application interacting with Ethereum TestNet to perform token distribution: <b> Script inside the scripts folder </b> <br /> 
    ● Docker File containing application code: <b> Dockerfile in package home directory </b> <br /> 
    ● Docker Hub URL of dockerised project: <b> <a href="https://hub.docker.com/r/474663/blockchainca-node-app"> Public URL </a> for the dockerised project. This link contains instructsion to pull and run the image image</b><br /> 
    ● Report Submission: <b>Yet to complete</b> <br /> 
    ● Pre-Recorded Video Presentation: <b>Yet to complete</b><br /> 

**Execution Guide**</br>
To pull the image, run following command:</br>

<b> docker pull 474663/blockchainca-node-app:latest </b></br>

To run the docker image, run following command:</br>

<b> docker run -d 474663/blockchainca-node-app </b></br>

To view the execution log, run following set of commands:</br>

1. <b> docker ps </b> - command to get the container ID | Copy the container ID that is running this image</br>

2. <b> docker logs <container-id> </b> - Paste the container ID in this command and run it to see the execution log</br></br>

Please contact - <b> x20149581@student.ncirl.ie </b> if you face any issue in pulling or running the docker image.</br>
