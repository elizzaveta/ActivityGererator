<template>
  <div>
    <h1>Data</h1>
    <h2>Clear data</h2>
    <p>You have {{numOfFavoriteActivities}} activities saved.</p>
    <button @click="handleClearButtonClick" :disabled="isDisabled">Clear</button>
    <h2>Export data</h2>
    <p>Export your favorites to .txt file</p>
    <button>Export</button>
  </div>
</template>

<script>
export default {
  name: "DataTab",
  data(){
    return{
      numOfFavoriteActivities: 0,
      isDisabled: true,
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