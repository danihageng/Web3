<script setup lang="ts">

import { storeToRefs } from 'pinia'
// import axios from 'axios'
import { useCryptoStore } from '~/stores/crypto'
const messageInput = ref(null as any)
const cryptoStore = useCryptoStore()
const { wave, connectWallet } = useCryptoStore()
const { account, guestPosts, guestPostsCount, priceMatic, totalBalance } = storeToRefs(cryptoStore)
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl m-4">
      Dani Crypto Project
    </h1>
    <h1 class="text-2xl m-4">
      Matic price: {{ priceMatic }} <i class="fas fa-dollar-sign" />
    </h1>
    <button v-if="!account" class="bg-green-300 rounded-100 p-4" @click="connectWallet">
      Connect web3 to cripto Wallet
    </button>
    <div v-if="account" class="mt-5">
      <div class="bg-green-300 rounded-100 p-4 w-1/2">
        <h1 class="text-2xl m-4 overflow-hidden">
          Connected Wallet: {{ account }}
        </h1>
      </div>
      <input
        v-model="messageInput"
        name="guestBookInfo"
        class="py-4 px-4  shadow border rounded-100"
        maxlength="20"
      >
      <button class="bg-yellow-300 rounded-100 p-4 mt-10" @click="wave(messageInput)">
        Send
      </button>
    </div>

    <div v-if="account" class="border shadow rounded-100 bg-blue-800 w-8/12 p-4 mt-10 text-white">
      <h3 class="text-2xl">
        Number Of Entries: {{ guestPostsCount }}
      </h3>
      <h3 v-if="totalBalance !== 0" class="text-2xl">
        Total amount inverted: {{ totalBalance }} MATIC = {{ totalBalance * priceMatic }} <i class="fas fa-dollar-sign" />
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
  <CoinList />
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style>
.rounded-100 {
  border-radius: 1rem;
}
.linear_gradient {
  background: linear-gradient(-45deg, #ffff, #de6161);
}
</style>
