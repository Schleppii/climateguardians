<template>
  <div class="Klasse1">
    <h1>Emissions Tabelle</h1>
    <input
      type="text"
      class="form-control mb-3"
      placeholder="Suchen..."
      v-model="searchQuery"
      @input="filterTabelle"
    />
    <table class="Tabelle1">
      <thead>
        <tr>
          <th @click="sortTabelle('land')">Land</th>
          <th @click="sortTabelle('unternehmen')">Unternehmen</th>
          <th @click="sortTabelle('emission')">CO2-Emission (in mio. t)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in filteredData" :key="index">
          <td>{{ row.land }}</td>
          <td>{{ row.unternehmen }}</td>
          <td>{{ row.emission }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import tabelle from "@/data/tabelle.json";
export default {
  data() {
    return {
      tableData: tabelle,
      filteredData: tabelle,
      searchQuery: "",
      sortKey: "",
      sortAsc: true,
    };
  },
  methods: {
    filterTabelle() {
      const query = this.searchQuery.toLowerCase();
      this.filteredData = this.tableData.filter(
        (item) =>
          item.land.toLowerCase().includes(query) ||
          item.unternehmen.toLowerCase().includes(query) ||
          item.emission.toString().toLowerCase().includes(query)
      );
    },
    sortTabelle(key) {
      if (this.sortKey === key) {
        this.sortAsc = !this.sortAsc;
      } else {
        this.sortKey = key;
        this.sortAsc = true;
      }

      this.filteredData.sort((a, b) => {
        let valueA = a[key];
        let valueB = b[key];
        // Prüfen, ob die Werte numerisch sind
        if (!isNaN(valueA) && !isNaN(valueB)) {
          return this.sortAsc ? valueA - valueB : valueB - valueA;
        } else {
          valueA = valueA.toString().toLowerCase();
          valueB = valueB.toString().toLowerCase();
          return this.sortAsc
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA);
        }
      });
    },
  },
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}
th {
  cursor: pointer;
  background-color: var(--main-bgcolour);
}
th,
td {
  border: 1px solid #000000;
  padding: 8px;
  text-align: left;
}
input {
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
}
</style>
