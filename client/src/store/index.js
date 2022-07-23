import {defineStore} from 'pinia'
import { contractAddress, contractABI } from '../../utils/constants';
import { ethers } from "ethers";


export const useDefaultStore = defineStore('default', {
    state: () => ({
        address: "Mon address",
        transaction: {},
        solde: 10,
        provider: null,
        signer: null,
        contract: null
    }),

    actions: {
        async getAddress(){
            this.provider = new ethers.providers.Web3Provider(window.ethereum)
            await this.provider.send('eth_requestAccounts', [])
            this.signer = this.provider.getSigner(),
            //this.solde = await this.provider.getBalance('ethers.goerli')
            this.contract = new ethers.Contract(contractAddress, contractABI, this.provider)
            console.log(await this.contract.balanceOf('rtdrdrtdrtd'))
        }
    }
})