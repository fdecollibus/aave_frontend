import { ethers } from 'ethers'
import Greeter from '../../contracts/Greeter.sol/Greeter.json'
import AAVE from '../../contracts/defi-adapter/AaveDefiAdapter.sol/AaveDefiAdapter.json'

export async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }
  // call the smart contract, read the current greeting value

  export async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      const greeterAddress='0x0087eb397af9e04ff9872199d63f841474bf2a27'
      const provider = new ethers.providers.AlchemyProvider('homestead','Bv3SLXcIGyh9GOtypaaEJB2apKY29uYh');
      //const provider = new ethers.providers.Web3Provider(window.ethereum)
      //const signer  = provider.getSigner();
      const blockNumber = await provider.getBlockNumber();
      console.log("Provider",provider);
      console.log("Greeter",greeterAddress);
      console.log("ABI",Greeter.abi);
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
      console.log("Contract",contract)
      const data = await contract.greet()
      console.log(data);
      //const greet = contract.greet().then(console.log);
      try {
        const data = await contract.greet()
        console.log('data: ', data);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }
    export async function getAaveAdapter() {
      if (typeof window.ethereum !== 'undefined') {
        const aaveAddress='0xf92a7b3d584cc75e94ecf923c70bd23619f4e5a7'
        const provider = new ethers.providers.AlchemyProvider('kovan','uU7SHAu7uASquoEkAmusQCjEnleXYuQ8');
        //const provider = new ethers.providers.Web3Provider(window.ethereum)
        //const signer  = provider.getSigner();
        const blockNumber = await provider.getBlockNumber();
        console.log("Provider",provider);
        console.log("aave",aaveAddress);
        const contract = new ethers.Contract(aaveAddress, AAVE.abi, provider)
        console.log("Contract",contract)
        const data = await contract._deployed()
        console.log(data);
        try {
          const data = await contract.greet()
          console.log('data: ', data);
        } catch (err) {
          console.log("Error: ", err);
        }
      }  
  }


export function returnPaymentOptions(){
    return {
        name: 'Ether', value: ' 1',
    }

}

