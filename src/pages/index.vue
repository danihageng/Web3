<script setup lang="ts">

import { storeToRefs } from 'pinia'
// import axios from 'axios'
import { useCryptoStore } from '~/stores/crypto'
const messageInput = ref(null as any)
const cryptoStore = useCryptoStore()
const { wave, connectWallet } = useCryptoStore()
const { account, guestPosts, guestPostsCount } = storeToRefs(cryptoStore)
const balance = localStorage.getItem('balance') ? localStorage.getItem('balance') : 0
const PriceMatic = localStorage.getItem('PriceMatic') ? localStorage.getItem('PriceMatic') : 0
const ConvertUSD = Number(balance) * Number(PriceMatic)
// const data = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
//   headers: {
//     'Accepts': 'application/json',
//     'X-CMC_PRO_API_KEY': 'a519b801-4e42-4ca5-86fd-b20333dbc664',
//   },
//   params: {
//     start: '1',
//     limit: '50',
//     convert: 'USD',
//   },
// })
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl m-4">
      Dani Crypto Project
    </h1>
    <button v-if="!account" class="bg-green-300 rounded p-4" @click="connectWallet">
      Connect web3 to cripto Wallet
    </button>
    <div v-if="account" class="mt-5">
      <div class="bg-green-300 rounded p-4">
        <h1 class="text-2xl m-4 overflow-auto">
          Connected to Wallet: {{ account }}
        </h1>
        <h1 class="text-2xl m-4">
          Current price of Matic: {{ PriceMatic }} <i class="fas fa-dollar-sign" />
        </h1>
      </div>
      <input
        v-model="messageInput"
        name="guestBookInfo"
        class="py-4 px-4  shadow border rounded"
        maxlength="20"
      >
      <button class="bg-yellow-300 rounded p-4 mt-10" @click="wave(messageInput)">
        Send
      </button>
    </div>

    <div v-if="account" class="border shadow  w-8/12 p-4 mt-10">
      <h3 class="text-2xl">
        Number Of Entries: {{ guestPostsCount }}
      </h3>
      <h3 class="text-2xl">
        Total amount inverted: {{ balance }} MATIC = {{ ConvertUSD }} <i class="fas fa-dollar-sign" />
      </h3>
      <!-- <h3 class="text-2xl">
        Data: {{ getPriceCoin() }}
      </h3> -->
      <div v-for="(guestPost, idx) in guestPosts" :key="idx" class="flex flex-col  m-auto " :class="{'mt-4': idx > 1}">
        <div v-if="guestPost.message" class="flex justify-between w-full">
          <span class="font-semibold">{{ guestPost.timestamp }}</span>
          <span>{{ guestPost.message }}</span>
          <span>{{ 'Amount trans: 0.05 MATIC' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
