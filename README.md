# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

# To Use 

You need to add in .env file a PRIVATE_KEY=0x23... this is your PRIVATE_KEY from metamask
after this, you just need introduce by console this command:

```shell
npm install --force
npx hardhat compile
npm run dev
```

and in your localhost environment can see the interface. 
the url is http://localhost:3333/