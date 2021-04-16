const Web3 = require('web3')
const fs = require('fs')
var Tx = require('ethereumjs-tx').Transaction

const web3 = new Web3('https://ropsten.infura.io/v3/cf30e4de419541e09c998fbbab0a84f8')

const senderAddress = '0x4C5E628C858A9728247AC9e93D2eB3605244C50a'

const senderPrivateKey = Buffer.from('3cfbeb3fbe3e512af3e1d2fa952d9558307a51add2433fcc027b42f3211c0f8d', 'hex')

const contractAddress = '0xf6042a75d2834428f0d05a0aff8133d78fdaec0c'

const contractABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

const contract = new web3.eth.Contract(contractABI, contractAddress)


const getTransactionCount = async (account) => {
    return await web3.eth.getTransactionCount(account)
}

const sendTransaction = async (raw) => {
    return await web3.eth.sendSignedTransaction(raw)
}

const transferFunds = async (account1, account2, amount) => {

    let txCount = await getTransactionCount(account1)

    console.log("txCount returned: " + txCount)

    const txObject = {
        nonce: web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(100000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei')),
        to: contractAddress,
        data: contract.methods.transfer(account2, amount).encodeABI()
    }

    const tx = new Tx(txObject, { chain: 'ropsten', hardfork: 'petersburg' })

    tx.sign(senderPrivateKey)

    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')

    console.log("raw hex transaction: " + raw)

    console.log("about to send transaction")

    let minedTransaction = await sendTransaction(raw)
    console.log("transaction hash returned: " + minedTransaction.transactionHash)

    return `txHash is: ${minedTransaction.transactionHash}`
}

const getBalanceOf = async (account) => {
    let balanceOf = await contract.methods.balanceOf(account).call()
    console.log(`Balance of account ${account} is ${balanceOf}`);
    return balanceOf;
}

const go = async () => {
    //Get list of ethereum addresses from external file
    let addresses = JSON.parse(fs.readFileSync("data/ethereumAddresses.json")).addresses;
    console.log("Given Ethereum addresses:", addresses);
    //Calculate total number of addresses
    var addressesCount = addresses.length;
    console.log("Total number of given Ethereum address: ", addressesCount);
    //Get balance of the sender account by interacting with the token contract
    var senderBalance = await getBalanceOf(senderAddress);
    //Calculate 5% of the available balance
    var amountToDistribute = (5 * senderBalance) / 100;
    //Calculate amount of tokens to be transferred to each ethereum account
    var amount = amountToDistribute / addressesCount;
    amount = (amount).toLocaleString('fullwide', { useGrouping: false });
    console.log("Total amount to distribute: ", amountToDistribute);
    //Iterate till all accounts received calculated amount of tokens
    for (const recipientAddress of addresses) {
        console.log("Amount to send: ", amount);
        console.log("Senders balance is: ", senderBalance);
        console.log("Recipient balance is: ", await getBalanceOf(recipientAddress));
        await transferFunds(senderAddress, recipientAddress, amount);
    }
}

module.exports = { transferFunds, getBalanceOf }

go()