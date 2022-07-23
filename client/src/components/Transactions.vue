<script>
    import {useDefaultStore} from './../store/index'
    import {mapState} from 'pinia'


   export default {
       
       computed: {
           ...mapState(useDefaultStore, ['address','transaction', 'solde'])
       }
   }



</script>
<template>
    <div class="w-full text-center p-4">
        <div class="rounded-lg w-8/12 text-left p-4 shadow-md bg-gradient-to-br from-red-700 to-pink-700">
            <div class="justify-between flex items-center">
                <h3>ETH</h3>
                <div>
                    {{ address}}
                </div>
            </div>
            <div class="mt-6">{{ solde }}</div>
        </div>

        <form class="p-3 rounded-lg text-left border-white bg-blue-400 mt-12" action="" >
            <div class="mt-4">
                <label for="">From :</label>
                <input type="text" v-model="transaction.from" class="bg-gray-50 mt-2 rounded-md bg-transparent border-white border-2 p-2 w-8/12 block">
            </div>
            <div class="mt-4">
                <label for="">To :</label>
                <input type="text" v-model="transaction.to" class="bg-gray-50 mt-2 rounded-md p-2 w-8/12  bg-transparent border-white border-2 block">
            </div>
            <div class="mt-4">
                <label for="">Amount :</label>
                <input type="text" v-model="transaction.amount" class="bg-gray-50 mt-2 rounded-md p-2 w-8/12 block  bg-transparent border-white border-2">
            </div>
            <div class="mt-4">
                <label for="">Motif :</label>
                <input type="text" v-model="transaction.motif" class="bg-gray-50 mt-2 rounded-md p-2 w-8/12 block  bg-transparent border-white border-2">
            </div>

            <div class="mt-5">
                <button class="w-8/12 rounded-md p-3 bg-blue-700 text-white hover:opacity-70 ">Envoyer</button>
            </div>
        </form>
    </div>
</template>