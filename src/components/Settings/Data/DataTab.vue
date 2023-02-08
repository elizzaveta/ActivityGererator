<template>
  <div>
    <h1>Data</h1>
    <h2>Clear data</h2>
    <p>You have {{numOfFavoriteActivities}} activities saved.</p>
    <button @click="handleClearButtonClick" :disabled="isDisabled">Clear</button>
    <h2>Export data</h2>
    <p>Export your favorites to a file</p>
    <button @click="handleExportButtonClick">Export</button>
    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option">
        {{ option }}
      </option>
    </select>
    <span> file format: .{{ selected }}</span>
  </div>
</template>

<script>
import {excelParser} from "@/ExportJsonToFile";
export default {
  name: "DataTab",
  data(){
    return{
      numOfFavoriteActivities: 0,
      isDisabled: true,
      options: ['csv', 'xls', 'json', 'txt', 'xml'],
      selected: 'csv'
    }
  },
  methods:{
    handleClearButtonClick(){

      let confirmed = confirm("Are you sure, you want to delete all favorites?")
      if(confirmed) {
        this.clearUserData();
        this.numOfFavoriteActivities = 0;
        this.isDisabled = true;
      }
    },
    clearUserData(){
      window.localStorage.removeItem("favorites");
    },
    handleExportButtonClick(){
      let favorites = JSON.parse(window.localStorage.getItem("favorites"))
      excelParser().exportDataFromJSON(favorites,"favorites", this.selected)
    }
  },
  mounted() {
    let favorites = JSON.parse(window.localStorage.getItem("favorites"));
    if(favorites) {
      this.numOfFavoriteActivities = favorites.length;
      if(this.numOfFavoriteActivities !== 0){ this.isDisabled = false}

    }
    console.log(this.numOfFavoriteActivities)
  }
}
</script>

<style scoped>

</style>