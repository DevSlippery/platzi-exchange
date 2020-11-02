<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th>LOGO</th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(a, index) in assets"
        :key="index"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
        
      >
        <td >
          <img
            class=" w-6 h-6 m-auto"     
            :src="
              `https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`
            "
            :alt="a.name"
          />
        </td>
        <td>
          <b># {{ a.rank }}</b>
        </td>
        <td>{{ a.name }}</td>
        <td>{{ dollarFilter(a.priceUsd) }}</td>
        <td>{{ dollarFilter(a.marketCapUsd) }}</td>
        <td
          :class="
            a.changePercent24Hr.includes('-')
              ? 'text-red-600'
              : 'text-green-600'
          "
        >
          {{ percentFilter(a.changePercent24Hr) }}
        </td>
        <td class="hidden sm:block"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import numeral from "numeral";
export default {
  name: "PxAssetsTable",

  props: {
    assets: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    dollarFilter(value) {
      if (!value) return "$ 0";
      return numeral(value).format("($ 0.00a)");
    },
    percentFilter(value){
      if(!value)return '0%'

      return `${Number(value).toFixed(2)}%`
          }
  }
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
