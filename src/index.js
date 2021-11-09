import '@axa-ch/patterns-library-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AXADropdown } from './patterns-library';
import { AXAButton } from './patterns-library';
import { AXAHeroBanner } from './patterns-library';
import { AXAHeading } from './patterns-library';
import { useState } from 'react';
import { ethers } from 'ethers'

import './index.scss';

export default class PodCryptoEasyInvest {
  // elem is the DOM node where the pod will be atatched on
  // options contains the store and the rest is the data attributes of the pod
  constructor(elem, { store, ...rest }) {
    this.elem = elem;
    this.options = rest;

    // { get: ƒ, publish: ƒ, subscribe: ƒ, clean: ƒ, getAsync: f }
    this.store = store;

    this.store.subscribe('test', 'any-namespace', (value) => {
      // eslint-disable-next-line no-console
      console.info(`-> external mock pod passed ${value} to us!`);
    });
    this.init();
  }

  init() {
    //const provider = new ethers.providers.Web3Provider(window.ethereum)
    requestAccount()
    ReactDOM.render(<>
      <AXAHeroBanner imageSource='img/millionaire.webp'>
        Become hilariously rich with Crypto!

      </AXAHeroBanner>
      <AXAHeading rank="1">Become hilariously rich with Crypto!</AXAHeading>
      <AXADropdown items={[{ name: 'Ether', value: 'Ether 1' }]}></AXADropdown>
      <AXAButton icon="arrow-right">Crypto Easy Invest</AXAButton>
    </>, this.elem);
  }
  


}



//import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json'

  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }
  const greeterAddress='0x0087EB397af9E04Ff9872199d63F841474bf2A27'
  // call the smart contract, read the current greeting value
  async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
      try {
        const data = await contract.greet()
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }

  
/*
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchGreeting}>Fetch Greeting</button>
        <button onClick={setGreeting}>Set Greeting</button>
        <input onChange={e => setGreetingValue(e.target.value)} placeholder="Set greeting" />
      </header>
    </div>
  );
}

export default App;*/