<script setup lang="ts">
import { useCryptoStore } from '~/stores/crypto'
import 'bootstrap/dist/css/bootstrap.min.css'
const props = useCryptoStore()

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Project web3 Dapp',
  meta: [
    { name: 'description', content: 'web3 Dapp' },
  ],
})

</script>

<template>
  <!-- {{ props.loading }} -->
  <Loader v-if="props.loading" />
  <router-view />
</template>
