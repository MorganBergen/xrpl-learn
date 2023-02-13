# xrpl-learn
contains all relevant Information to understanding the xrp ledger as well as building and deploying applications on the dlt.

**contents**

1.  [xrpl](#xrpl)
2.  [xrpl basics](#xrpl-basics)
3.  [what is xrp](#what-is-xrp)
4.  [what does xrp stand for](#what-does-xrp-stand-for)

## XRPL

[learn XRP ledger](https://learn.xrpl.org/course/intro-to-the-xrpl/)

[Analysis fo the XRP Ledger Consensus Protocol](https://arxiv.org/abs/1802.07242v1)

The XRP Ledger Consensus Protocol is a previously developed consensus protocol powering the XRP Ledger. It is a low-latency Byzantine agreement protocol, capable of reaching consensus without full agreement on which nodes are members of the network. We present a detailed explanation of the algorithm and derive conditions for its safety and liveness.

> We will be utilizing the `XRPLF/xrpl-dev-portal` for referencing documentation on XRPL

## xrpl basics

```JavaScript
/**
 * @file    primitive.js
 * @brief   import the xrpl ledger, used to store
 *          all transactions and the state of the ledger
 */


const xrpl = require('xrpl');
console.log(xrpl);

```


```console
morgan% node primitive.js
{
  BroadcastClient: [Getter],
  Client: [Getter],
  Wallet: [Getter],
  keyToRFC1751Mnemonic: [Getter],
  rfc1751MnemonicToKey: [Getter],
  LedgerEntry: [Getter],
  setTransactionFlagsToNumber: [Getter],
  parseAccountRootFlags: [Getter],
  validate: [Getter],
  AccountSetAsfFlags: [Getter],
  AccountSetTfFlags: [Getter],
  NFTokenCreateOfferFlags: [Getter],
  NFTokenMintFlags: [Getter],
  OfferCreateFlags: [Getter],
  PaymentFlags: [Getter],
  PaymentChannelClaimFlags: [Getter],
  TrustSetFlags: [Getter],
  getBalanceChanges: [Getter],
  dropsToXrp: [Getter],
  xrpToDrops: [Getter],
  hasNextPage: [Getter],
  rippleTimeToISOTime: [Getter],
  isoTimeToRippleTime: [Getter],
  rippleTimeToUnixTime: [Getter],
  unixTimeToRippleTime: [Getter],
  percentToQuality: [Getter],
  decimalToQuality: [Getter],
  percentToTransferRate: [Getter],
  decimalToTransferRate: [Getter],
  transferRateToDecimal: [Getter],
  qualityToDecimal: [Getter],
  isValidSecret: [Getter],
  isValidAddress: [Getter],
  hashes: [Getter],
  deriveKeypair: [Getter],
  deriveAddress: [Getter],
  deriveXAddress: [Getter],
  signPaymentChannelClaim: [Getter],
  verifyKeypairSignature: [Getter],
  verifyPaymentChannelClaim: [Getter],
  convertStringToHex: [Getter],
  convertHexToString: [Getter],
  classicAddressToXAddress: [Getter],
  xAddressToClassicAddress: [Getter],
  isValidXAddress: [Getter],
  isValidClassicAddress: [Getter],
  encodeSeed: [Getter],
  decodeSeed: [Getter],
  encodeAccountID: [Getter],
  decodeAccountID: [Getter],
  encodeNodePublic: [Getter],
  decodeNodePublic: [Getter],
  encodeAccountPublic: [Getter],
  decodeAccountPublic: [Getter],
  encodeXAddress: [Getter],
  decodeXAddress: [Getter],
  encode: [Getter],
  decode: [Getter],
  encodeForMultiSigning: [Getter],
  encodeForSigning: [Getter],
  encodeForSigningClaim: [Getter],
  createCrossChainPayment: [Getter],
  parseNFTokenID: [Getter],
  XrplError: [Getter],
  UnexpectedError: [Getter],
  ConnectionError: [Getter],
  RippledError: [Getter],
  NotConnectedError: [Getter],
  DisconnectedError: [Getter],
  RippledNotInitializedError: [Getter],
  TimeoutError: [Getter],
  ResponseFormatError: [Getter],
  ValidationError: [Getter],
  NotFoundError: [Getter],
  XRPLFaucetError: [Getter],
  authorizeChannel: [Getter],
  verifySignature: [Getter],
  multisign: [Getter]
}
```


### What is XRP?


``` JavaScript
/**
 * @file    primitive.js
 * @brief   This file is a simple
 *          example of how to use the xrpl.js library
 * @param:  none
 * @return: none
 */

// import the xrpl ledger this is the ledger that is used to store all the transactions and the state of the ledger, require is a function that is used to import a module
const xrpl = require('xrpl');

async function main() {
    // this is the address of the account that we are going to use in order to send a transaction

    /**
     * @brief   client is
     * @param:  server at address
     *          wws://s.altnet.rippletest.net:51233
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

    // print the response
    console.log(response);

    // disconnect from the server
    client.disconnect()

}

main()


```

`X prefix for non-national currencies in the ISO 4217 standard.`

XRPL (XRP Ledger) is a Distributed Ledger Technology, is a decentralized, public blockchain led by a global developer community.  The ledger is owned by Ripple Labs Inc.  XRP is a Internationally recognized standarized asset/currency code validated and now compliant by ISO 20022 - ISO 2022 is under SWIFT known to be the Society for Worldwide Interbank Financial Telecommunications which provides a secure messaging system for financial transactions between participating banks.  A Currency Code is a code allocated to a currency by a Maintenance Agency under an international identification scheme as described in the latest edition of the international standard ISO "Codes for the representation of currencies and funds".

##  what does XRP stand for?

> XRP is the three-letter currency/asset code formed by appending a single character to a two-letter county code of the issuing country.

**X** - Asset

**RP** - Ripple Labs

The **X** Represents assets not issued by any country, via standarizations XRP is not issued by any country, thus for assets not issued by any country, the first letter must be X.  No country codes starting with X will be issued. So, for example, since the chemical symbol for gold is Au, gold’s currency code is XAU.  XRP’s first letter is X because XRP is not issued by any country.  In the early days, we called the ledger’s native asset “ripples”. So the natural currency code to choose was “XRP”.

**Examples**

1. USD - United States "Dollar"

    Since the United States’ country code is “US”, US dollars have the currency code “USD”.

2.  EUR - European Union "Euro"

    The European Union is a not a country, but still acts as a country code. The EU has the country code “EU”, so the currency code for Euros is “EUR”.

3.  XBT - Bitcoin "Asset"

    Some people use “BTC” for bitcoin, however the formalization standard of bitcoin is actually “XBT”.

**3.  What is [ISO 20022](https://www.iso20022.org)?**

ISO2022 - Universal Financial Industry Message Scheme

ISO20022 International Organization for Standardization is a single standarization approach (methodology, process, repository) to be used by all financial standards initiatives.  It is a standard/protocol that allows for electronic data to interchange between different financial institutions. In covers financial information transferred between organizations that include credit or debit card transactions, settlement data and securities trading, and other payment transactions.  In general the payment protocols and messages across the world are validated by countries and financial networks which all adhere to various standardizations.  These standardizations are recognized by the IS) 20022 which bring legacy payment infrastructure to help global interoperabilityy and allow for world's cross-border payment flows.  RippleNet is apart of the ISO 20022 Registrtaion Management Group (RMG) standards body and the first member focused on Distributed Ledger Technology (DTL).

**4.  What is [SWIFT](https://www.swift.com)**

Swift is the global providor of secure financial messaging services and implements cross-border payment systems such as ISO 2022

### What is the Purpose of this Repo

**This is a test repo that will review over the basics of the xrp ledger**

**Purpose**
- Find out how to use a local XRP chain
- Reading and writing to it
- How to create NFTs on it
- attestation managers
- how to swap in and out different chains

Semantic Remote Attestation Evidence Health Ledger

A repo that will outline a research project proposal for the XRP

Semantic Remote Attestation Evidence on Chain
- health records and ledgers for evidence
- system and local manisfests
- Local instances of the XRP ledger.
- What do we need to download an XRP client.
- Getting it initialized for the client
- Lauren wants to do a hackathon with XRP
### Goal
How to read and write out of the blockchain

### Reference
Develop a basic understanding of the XRP Ledger's consensus mechanism.
[Documentation](https://xrpl.org/concepts.html)


## conference ubri connect 2022

- hackathon explorer
- [NFT launch party](xrplnft.devpost.com)

### What is the XRP Ledger

The XRP Ledger is a decentralized network that uses a consensus protocol to settle and record transactions in a secure distributed database. The network is maintained by a decentralized community of independent validators that are responsible for processing transactions and reaching a shared agreement about the order in which they should be applied to the database. The XRP Ledger is the home of XRP, the native digital asset of the network.

### XRPL student program overview

student ambassadors create decntralized campus communities
fall 2022 cohort selection for the xrpl campus ambassador
https://github.com/XRPLF/xrpl-dev-portal)

one minor technical question
xrpl learning portal
willingness to connect and the willingness to connect to the xrpl
early december and visit the, xrpl.com/communities and apply

### xrpl learning portal

do it yourself

### internship opportunities

- look for the xrpl internship program
- vested interest in what youre applying to
- three day hackathon and build on the ledger and compete for a prize
- team building
- interview consists of one to two weeks
- PR call
- Hiring manager
- virtual or onsite
- paired programming in data structures and algorithms
- technical interview

