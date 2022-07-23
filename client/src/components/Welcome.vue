<script>
import { useDefaultStore } from '../store'
import {mapState, mapActions} from 'pinia'


export default {
    methods: {
        connectWallet(){
            alert("Connecting to the wallet...")
        }
    },
    computed: {
        ...mapState(useDefaultStore, ['address'])
    },
    methods: {
        ...mapActions(useDefaultStore, ['getAddress'])
    }
} 
</script>

<template>
    <div class="p-12">
        <h3 class="text-3xl">Send Crypto <br> Across The World</h3>
        <div class="text-xl mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tenetur nostrum itaque aspernatur perferendis pariatur qui aut est voluptatem soluta.</div>
        <div class="mt-6">
            <button @click="getAddress" class="rounded-full bg-blue-900 px-10 py-3 hover:opacity-70">Connect Wallet {{ address }}</button>
        </div>
    </div>
</template>