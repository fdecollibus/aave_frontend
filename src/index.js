import '@axa-ch/patterns-library-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AXADropdown } from './patterns-library';
import { AXAButton } from './patterns-library';
import { AXAHeroBanner } from './patterns-library';


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
    ReactDOM.render(<>
      <AXAHeroBanner></AXAHeroBanner>
      <AXADropdown items={[{ name: 'Ether', value: 'Ether 1' }]}></AXADropdown>
      <AXAButton icon="arrow-right">Crypto Easy Invest</AXAButton>
    </>, this.elem);
  }
}
