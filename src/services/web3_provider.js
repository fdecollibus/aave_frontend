import Greeter from '../../contracts/Greeter.sol/Greeter.json'
import AAVE from '../../contracts/defi-adapter/AaveDefiAdapter.sol/AaveDefiAdapter.json'
import { createAlchemyWeb3 } from '@alch/alchemy-web3'


  export async function getW3AaveAdapter() {
      if (typeof window.ethereum !== 'undefined') {
        const aaveAddress='0xf92a7b3d584cc75e94ecf923c70bd23619f4e5a7'
        const web3 = createAlchemyWeb3("https://eth-kovan.alchemyapi.io/v2/uU7SHAu7uASquoEkAmusQCjEnleXYuQ8")
        //const provider = new ethers.providers.Web3Provider(window.ethereum)
        //const signer  = provider.getSigner();
        const contract = await web3.eth.Contract(AAVE.abi, aaveAddress);
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

