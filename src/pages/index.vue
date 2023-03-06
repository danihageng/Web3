<script setup lang="ts">

import { storeToRefs } from 'pinia'
import { useCryptoStore } from '~/stores/crypto'

const messageInput = ref(null as any)
const cryptoStore = useCryptoStore()
const { wave, connectWallet, withdraw } = useCryptoStore()
const { account, guestPosts, guestPostsCount } = storeToRefs(cryptoStore)

</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-2xl m-4">
      Crypto Guest Book
    </h1>
    <button v-if="!account" class="background rounded p-4" @click="connectWallet">
      Connect Wallet
    </button>
    <div v-if="account" class="mt-5">
      <input
        v-model="messageInput"
        name="guestBookInfo"
        class="py-4 px-4  shadow border rounded"
        maxlength="20"
      >
      <button class="bg-yellow-300 rounded p-4 mt-10" @click="wave(messageInput)">
        Send
      </button>
      <button class="bg-yellow-300 rounded p-4 mt-10" @click="withdraw">
        withdraw
      </button>
    </div>

    <div v-if="account" class="border shadow  w-4/12 p-4 mt-10">
      <h3 class="text-2xl">
        Number Of Entries: {{ guestPostsCount }}
      </h3>
      <div v-for="(guestPost, idx) in guestPosts" :key="idx" class="flex flex-col  m-auto " :class="{'mt-4': idx > 1}">
        <div v-if="guestPost.message" class="flex justify-between w-full">
          <span class="font-semibold">{{ guestPost.timestamp }}</span>
          <span>{{ guestPost.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style lang="css" scoped>
.background {
  background: linear-gradient(248.86deg, #B6509E 10.51%, #2EBAC6 93.41%);
  color:white;
}
</style>
