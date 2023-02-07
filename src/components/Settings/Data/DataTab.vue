<template>
  <div>
    <h1>Data</h1>
    <p>You have {{numOfFavoriteActivities}} activities saved.</p>
    <button>Clear my data</button>
  </div>
</template>

<script>
export default {
  name: "DataTab",
  data(){
    return{
      numOfFavoriteActivities: 0
    }
  },
  methods:{
    clearUserData(){
      window.localStorage.removeItem("favorites");
    }
  },
  mounted() {
    let favorites = JSON.parse(window.localStorage.getItem("favorites"));
    this.numOfFavoriteActivities = favorites.length;
  }
}
</script>

<style scoped>

</style>