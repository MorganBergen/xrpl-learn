/**
 * @file    primitive.js
 * @brief   This file is used to send a TEST transaction to the test network server
 *          As an example of how to use the xrpl.js library
 */

// import the xrpl ledger this is the ledger that is used to store all the transactions and the state of the ledger, 
// require is a function that is used to import a module
const xrpl = require('xrpl');

async function main() {


    /**
     * @brief   client is 
     * @param   server is the address of the server that we are connecting to 
     *          wws://s.altnet.rippletest.net:51233
     *          this is the address of the server that we are going to use to send the 
     *          transaction
     *          rippletest is a test network that is used to test the transactions
     *          before sending them to the main network, thus this is a test transactio
     *          this is the address of the account that we are going to use in order to send a transaction
     * 
     */
    const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233");

    /**
     * client.connect() is a promise that resolves when 
     * the connection is established
     */
    await client.connect();

    // response is an object that contains the information about the account
    // client.request is a function that is used to send a request to the server
    // paratemers of the request are the command and the account addresss
    const response = await client.request({
        // command is the command that we are going to send to the server
        "command": "account_info",
        // account is a alphanumeric string that is the address of the account
        "account": "rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe",
        // "validated" is a boolean that is used to specify if we want to get the information from the validated ledger or from the current ledger
        "ledger_index": "validated"
    });

    console.log(response, "response");

    // print the response
    console.log(response);

    // disconnect from the server
    client.disconnect();

}

main()

