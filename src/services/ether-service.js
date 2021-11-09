import { ethers } from 'ethers'
import Greeter from '../../contracts/Greeter.sol/Greeter.json'

export async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }
  const greeterAddress='0x0087EB397af9E04Ff9872199d63F841474bf2A27'
  // call the smart contract, read the current greeting value
export async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      console.log("Provider",provider);
      console.log("Greeter",greeterAddress);
      console.log("ABI",Greeter.abi);

      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
      console.log("Contract",contract)
      contract.greet().then(console.log);

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

