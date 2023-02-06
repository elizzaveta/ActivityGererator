<template>

  <div v-if="empty" class="massage-empty-favorites">
    <h2>You have not saved any activity yet.</h2>
    <NavigationButton text="Back to Generator" to="/"/>
  </div>
  <div v-else><FavoritesList/></div>
</template>

<script>
import NavigationButton from "@/components/NavigationButton.vue";
import FavoritesList from "@/components/FavoritesList.vue";

export default {
  name: "Favorites",
  components: {FavoritesList, NavigationButton},
  data(){
    return{
      empty: true,

    }
  },
  mounted() {
    let favorites = JSON.parse(window.localStorage.getItem("favorites"));
    if(favorites && favorites.length !== 0){
      this.empty = false;
    }
  }
}
</script>

<style scoped>
.massage-empty-favorites{
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 30vh;
}
.massage-empty-favorites h2{
  color: var(--text-color);
}
</style>