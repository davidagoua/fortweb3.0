<script setup>

import {Navbar, Footer, Transactions, Loader, Welcome} from './components/index'

</script>

<template>

  <div class="min-h-screen bg-gradient-to-r px-24 from-sky-500 to-indigo-500 text-white">
    <Navbar />


    <div class="flex justify-between items-center ">

      <Welcome class="w-6/12" />
      
      <Transactions class="w-6/12" />

    </div>


    <Loader />

    
  </div>


</template>

