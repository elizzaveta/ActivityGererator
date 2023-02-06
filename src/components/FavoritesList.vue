<template>
<div class="wrapper">
  <div v-if="loaded" v-for="activity in favorites" :id="activity.id" class="favorite-activity">
      <h2 :id="activity.id" @click="handleClick($event)">{{activity.text}}</h2>
      <DeleteButton :activity-id="activity.id"/>
  </div>
  <ActivityFloatCard :activity-id="selectedActivityId" :key="floatCardKey"/>
</div>
</template>

<script>
import DeleteButton from "@/components/DeleteButton.vue";
import ActivityFloatCard from "@/components/ActivityFloatCard.vue";

export default {
  name: "FavoritesList",
  components: {ActivityFloatCard, DeleteButton},
  data(){
    return{
      loaded: false,
      favorites: [],
      localStorage: window.localStorage,
      selectedActivityId: null,
      floatCardKey: 0,
      localStorageFavoritesKey: "favorites"
    }
  },
  methods:{
    handleClick(e){
      this.selectedActivityId = e.target.id;
      this.floatCardKey++;
    }
  },
  mounted() {
    this.favorites = JSON.parse(window.localStorage.getItem(this.localStorageFavoritesKey));
    this.loaded = true;
  }
}
</script>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.favorite-activity{
  display: flex;
  justify-content: space-between;
  background: var(--secondary-color);
  border-radius: 5px;
  padding: 5px 20px;
  color: var(--text-color);
  border: 1px solid var(--pacific-blue);
}
.favorite-activity:hover{
  background: var(--primary-color);

}
h2{
  width:100%
}
h2:hover{
  cursor: pointer;
}
</style>