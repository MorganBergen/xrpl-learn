# simple XRP payment using `xrpl.js`

## development enviroment

`xrpl.js library`
`xrpl-py library`

Library for interacting with the XRP Ledger
This library integrates a JavaScript application with the xrp ledger, used for...

- [x] IOUs
- [x] payment paths
- [x] decentralized exchange
- [x] account settings
- [x] payment channels
- [x] escrows
- [x] multi-sgning

### installing the development enviroment using npm

node package manager (npm) is the world's largest software library containing over 800,000 code packages.  In general a package manager or package-management system is a collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs for a computer in a consistent manner.

**package usage in CLI**

`$ npm install <package>`

**installing the package manager xrpl**

```console
morgan% npm install --save xrpl 

added 1 package, changed 5 packages, and audited 112 packages in 4s

42 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

### Test Transaction on rippletest.net

![what is a url and how is this specific request identified]()

We will come back here later after working on the JavaScript lecture on javascript and the web browser to get a more indepth understanding of urls, servers, and what have you 

`wss://s.altnet.rippletest.net:51233`

```javaScript
const xrpl = require('xrpl');

async function main() {
	const morgan = new xrpl.Client("wss://s.altnet.rippletest.net:51233");
	
	await morgan.connect();
	const response = await morgan.request({
		"command": "account_info",
		"account": "rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe",
		"ledger_index": "validated"
	});
	
	console.log(response);
	
	morgan.disconnect();

}
main();
```

```console
morgan % node test.js
{
  id: 0,
  result: {
    account_data: {
      Account: 'rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe',
      Balance: '94722477028677911',
      Flags: 0,
      LedgerEntryType: 'AccountRoot',
      OwnerCount: 0,
      PreviousTxnID: 'E6BD42211CD22D116F485D9055CC9DFACD4539C5A603F49FB024DE2B1627EF79',
      PreviousTxnLgrSeq: 31476706,
      Sequence: 4272840,
      index: '31CCE9D28412FF973E9AB6D0FA219BACF19687D9A2456A0C2ABC3280E9D47E37'
    },
    ledger_hash: '6C822B3EF7D27E537A8F49EA70572699211073085CDDDF181877302D9746FAC0',
    ledger_index: 31476728,
    validated: true
  },
  type: 'response'
}
morgan%

```
### Key Value Pairs of `response`

`id`                  

`result`

`account data`

`account`

`balance`

`flags`

`LedgerEntryTag

OwnerCount

PreviousTxnID

PreviousTxnLgr

Sequence

index

ledger_hash

ledger_index

validated

type

