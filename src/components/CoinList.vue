<template>
  <div class="container py-10">
    <div class="row">
      <input
        v-model="textSearch"
        type="text"
        class="form-control text-light bg-dark rounded-0 border-0 my-4"
        placeholder="Search"
        autofocus
        @keyup="searchCoin()"
      >

      <table class="table table-hover table-dark text-light">
        <thead>
          <tr>
            <th v-for="(title, index) in titles" :key="index">
              {{ title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(coin, index) in filteredCoins" :key="coin.id">
            <td class="text-muted">
              {{ index + 1 }}
            </td>
            <td
              class="px-4"
              style="
                display: flex;
                align-items: center;
                align-content: space-between;"
            >
              <img :src="coin.image" :alt="coin.name" style="width: 2rem" class="me-2">
              <span>
                {{ coin.name }}
              </span>
              <span class="ms-2 text-muted text-uppercase">
                {{ coin.symbol }}
              </span>
            </td>
            <td>$ {{ coin.current_price.toLocaleString() }}</td>
            <td
              :class="[
                coin.price_change_percentage_24h > 0
                  ? 'text-success'
                  : 'text-danger',
              ]"
            >
              {{ coin.price_change_percentage_24h.toLocaleString() }} %
            </td>
            <td>$ {{ coin.total_volume.toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      coins: [],
      filteredCoins: [],
      titles: ['#', 'Coin', 'Price', 'Price Change', '24h Volume'],
      textSearch: '',
    }
  },
  async mounted() {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false',
    )
    const data = await res.json()
    this.coins = data
    this.filteredCoins = data
  },
  methods: {
    searchCoin() {
      this.filteredCoins = this.coins.filter(
        coin =>
          coin.name.toLowerCase().includes(this.textSearch.toLowerCase())
          || coin.symbol.toLowerCase().includes(this.textSearch.toLowerCase()),
      )
    },
  },
}
</script>
