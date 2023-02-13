# xrpl-learn

understand the pre-requisit intro basics before diving into development on the Blockchain.   references and info can be sourced here [XRPL Concepts Page](https://xrpl.org/intro-to-consensus.html).  contains all relevant Information to understanding the xrp ledger as well as building and deploying applications on the dlt.

[view documentation](https://xrpl.org/concepts.html)

**contents**

0.  [why](#why)
1.  [xrpl](#xrpl)
2.  [xrpl basics](#xrpl-basics)
3.  [what is xrp](#what-is-xrp)
4.  [what does xrp stand for](#what-does-xrp-stand-for)
5.  [what is iso 2022](#what-is-iso-2022)
6.  [what is swift](#what-is-swift)
7.  [xrp ledger consensus protocol](#xrp-ledger-consensus-protocol)
    -  [network protocols](#network-protocols)
    -  [consensus overview](#consensus-overview)
    -  [properties](#properties)
    -  [ledger history](#ledger-history)
8.  [software ecosystem](#software-ecosystem)
9.  [consensus research](#consensus-research)
10. [white paper](#white-paper)
11. [send xrp](https://github.com/MorganBergen/xrpl-learn/tree/main/src/00-send-xrp)

## why

to secure internship at ripple [xrpl internship](https://ripple.com/careers/all-jobs/job/4805046?gh_jid=4805046)

<img src="" width="100" height="100">

## xrpl

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

## what is iso 2022?

[ISO2022 - Universal Financial Industry Message Scheme](https://www.iso20022.org)

ISO20022 International Organization for Standardization is a single standarization approach (methodology, process, repository) to be used by all financial standards initiatives.  It is a standard/protocol that allows for electronic data to interchange between different financial institutions. In covers financial information transferred between organizations that include credit or debit card transactions, settlement data and securities trading, and other payment transactions.  In general the payment protocols and messages across the world are validated by countries and financial networks which all adhere to various standardizations.  These standardizations are recognized by the IS) 20022 which bring legacy payment infrastructure to help global interoperabilityy and allow for world's cross-border payment flows.  RippleNet is apart of the ISO 20022 Registrtaion Management Group (RMG) standards body and the first member focused on Distributed Ledger Technology (DTL).

## what is swift?

[Swift](https://www.swift.com) is the global providor of secure financial messaging services and implements cross-border payment systems such as ISO 2022

## xrp ledger consensus protocol

The XRP Ledger Consensus Protocol is a previously developed consensus protocol powering the XRP Ledger. It is a low-latency Byzantine agreement protocol, capable of reaching consensus without full agreement on which nodes are members of the network. We present a detailed explanation of the algorithm and derive conditions for its safety and liveness.

## network protocols


Before we establish what the XRP Ledger Consensus Protocol is we need to first establish a basic understand on what a **communication/network protocol** is.  A protocol is a system of rules that allows two or more communications systems to transmit infomation/data via any kind of variation of a physical quantity.  The protocol defines a set of rules, syntax, semantics, synchronization ... of communication and possible error recovery methods.  Protocols in our case for the Consensus for XRP blockchain will be implemented by software.

## consensus overview

Consensus is the most important property of any decentralized payment system. In traditional centralized payment systems, one authoritative administrator gets the final say in how and when payments occur. Decentralized systems, by definition, don't have an administrator to do that. Instead, decentralized systems like the XRP Ledger define a set of rules all participants follow, so every participant can agree on the exact same series of events and their outcome at any point in time. We call this set of rules a consensus protocol.

Consensus protocols are a solution to the double-spend problem: the challenge of preventing someone from successfully spending the same digital money twice. The hardest part about this problem is putting transactions in order: without a central authority, it can be difficult to resolve disputes about which transaction comes first when you have two or more mutually-exclusive transactions sent around the same time. For a detailed analysis of the double-spend problem, how the XRP Ledger Consensus Protocol solves this problem, and the tradeoffs and limitations involved, see Consensus Principles and Rules.

The XRP Ledger uses a consensus protocol unlike any digital asset that came before it. This protocol, known as the XRP Ledger Consensus Protocol, is designed to have the following important properties:

Current Centralized Payment Systems are parties exchanging with an intermediary that being in this fragmented 3 Finite Automata.  Where behavior of exchnage depends on the intermediary (The Bank) to validate transactions.

## properties

1.  Everyone who uses the XRP Ledger can agree on the latest state, and which transactions have occurred in which order.
All valid transactions are processed without needing a central operator or having a single point of failure.

2.  All valid transactions are processed without needing a central operator or having a single point of failure.

3.  The ledger can make new blocks even if some participants join, leave, or behave inappropriately.

4.  The confimration of transactions is not a is a consensus mechanism which doe snot require any Proof of Work mining unlike other blockchain systems.

## ledger history

An XRP ledger processes transactions in blocks called "ledger versions".  Each ledger version contains three pieces:

**ledger version contents**
1.  The current state of all balances and objects stored in the ledger.
2.  The set of transactions that have been applied to the previous ledger to result in this one.
3.  Metadata about the current ledger version

    **_ledger index_**
    **_cyrptographic hash_**

that uniquely identifies its contents, and information about the parent ledger that was used as a basis for building one like such.  The following is an example of a ledger version comprising of metadata, states, and transactions.

![](https://xrpl.org/img/anatomy-of-a-ledger-simplified.svg)

    genesis ledger with ledger index 1 ->

## software ecosystem

![](https://xrpl.org/img/ecosystem.svg)

## consensus research


## white paper


[Analysis fo the XRP Ledger Consensus Protocol](https://arxiv.org/abs/1802.07242v1)

Add post script file here

The XRP Ledger Consensus Protocol is a previously developed consensus protocol powering the XRP Ledger. It is a low-latency Byzantine agreement protocol, capable of reaching consensus without full agreement on which nodes are members of the network. We present a detailed explanation of the algorithm and derive conditions for its safety and liveness.


![1802 07242-01](https://user-images.githubusercontent.com/65584733/190039229-0b0e43f7-2b45-4787-a300-22ae0d6fc0d1.jpg)
![1802 07242-02](https://user-images.githubusercontent.com/65584733/190039234-7a73845f-bc7b-4f26-98c8-9c4cf2e32d52.jpg)
![1802 07242-03](https://user-images.githubusercontent.com/65584733/190039240-e210bac6-9194-413b-acf2-abdaeaee7abf.jpg)
![1802 07242-04](https://user-images.githubusercontent.com/65584733/190039243-1c6b568a-c0e2-4826-afe1-2daeec4f6b74.jpg)
![1802 07242-05](https://user-images.githubusercontent.com/65584733/190039246-005e5a9e-6a5f-46dd-8e4a-4905d635c365.jpg)
![1802 07242-06](https://user-images.githubusercontent.com/65584733/190039247-413750ea-2123-4dda-b1f9-4e3eecca9f36.jpg)
![1802 07242-07](https://user-images.githubusercontent.com/65584733/190039250-2507f9c1-c8b4-407a-910b-a2c2584a067d.jpg)
![1802 07242-08](https://user-images.githubusercontent.com/65584733/190039251-dcfd3984-95a8-464b-b3cd-64911a7268ae.jpg)
![1802 07242-09](https://user-images.githubusercontent.com/65584733/190039253-9e1c3961-cf96-44a3-ad61-838d0c7f1f96.jpg)
![1802 07242-10](https://user-images.githubusercontent.com/65584733/190039255-6ed686d9-cd4d-4ca9-b2e0-398e10232a09.jpg)
![1802 07242-11](https://user-images.githubusercontent.com/65584733/190039257-bfbd1ccb-9a01-4c9c-b237-42fbf0ae2e09.jpg)
![1802 07242-12](https://user-images.githubusercontent.com/65584733/190039259-134dbf4c-1542-489a-98e4-984c5b6c3338.jpg)
![1802 07242-13](https://user-images.githubusercontent.com/65584733/190039260-aa27ee0e-fb08-4cdd-972e-6415aa2ea7f2.jpg)
![1802 07242-14](https://user-images.githubusercontent.com/65584733/190039262-3c9bb05a-86d1-4a32-8a70-60f4f8bce891.jpg)
![1802 07242-15](https://user-images.githubusercontent.com/65584733/190039265-7654c072-5e66-49b2-bb25-6c2dc7d4e754.jpg)
![1802 07242-16](https://user-images.githubusercontent.com/65584733/190039267-ad92ade1-c239-4eee-badc-83731705c32b.jpg)
![1802 07242-17](https://user-images.githubusercontent.com/65584733/190039268-0f2b40e3-1b7e-4c41-a6cc-fa20d83cc19c.jpg)
![1802 07242-18](https://user-images.githubusercontent.com/65584733/190039270-70d7cd77-45ee-4f04-9650-eec358651f31.jpg)
![1802 07242-19](https://user-images.githubusercontent.com/65584733/190039272-d5774c8c-0dbd-4a17-b5a1-515a3c0d1673.jpg)
![1802 07242-20](https://user-images.githubusercontent.com/65584733/190039273-2e5385c5-3be6-4d6f-b182-fe108c97faff.jpg)
![1802 07242-21](https://user-images.githubusercontent.com/65584733/190039274-af9e8e9f-adac-4c44-98c8-f8742385046b.jpg)
![1802 07242-22](https://user-images.githubusercontent.com/65584733/190039275-39f33789-c76f-4a3f-9eb9-3f103b6e6533.jpg)
![1802 07242-23](https://user-images.githubusercontent.com/65584733/190039277-9beb7bfd-5ef5-40ef-916c-3032c72830ba.jpg)
![1802 07242-24](https://user-images.githubusercontent.com/65584733/190039279-be635e78-bc85-4bfc-bd26-527cd108ec83.jpg)
![1802 07242-25](https://user-images.githubusercontent.com/65584733/190039280-da34d549-1f68-4609-935f-56f91f998274.jpg)

## send xrp


