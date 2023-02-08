<template>
  <div>
    <h1>Data</h1>
    <p v-if="numOfFavoriteActivities===0">You don't have any saved activities.</p>
    <p v-if="numOfFavoriteActivities!==0">You have
      {{numOfFavoriteActivities}}
      activit<span v-if="numOfFavoriteActivities===1">y</span>
      <span v-if="numOfFavoriteActivities!==1">ies</span>
      saved.</p>
    <h2>Clear data</h2>
    <p>Delete all saved activities</p>
    <button @click="handleClearButtonClick" :disabled="isDisabled">Clear</button>
    <h2>Export data</h2>
    <p>Export saved activities to a file</p>
    <button @click="handleExportButtonClick" :disabled="isDisabled">Export</button>
    <select v-model="selected"  :disabled="isDisabled">
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
  }
}
</script>

<style scoped>
h1{
  margin-bottom: 5px;
}
h2{
  margin: 5px 0 2px 0
}
button{
  padding: 5px 10px;
  margin-right: 5px;
  border: none;
  border-radius: 5px;
  background: var(--accent-color);
}
</style>