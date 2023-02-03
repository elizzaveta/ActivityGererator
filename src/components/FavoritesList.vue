<template>
<div class="wrapper">
  <div v-if="loaded" v-for="key in favoritesKeys" :id="key" class="favorite-activity">
      <h2 :id="key" @click="handleClick($event)">{{this.localStorage.getItem(key)}}</h2>
      <DeleteButton :activity-id="key"/>
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
      favoritesKeys: [],
      localStorage: window.localStorage,
      selectedActivityId: null,
      floatCardKey: 0
    }
  },
  methods:{
    handleClick(e){
      this.selectedActivityId = e.target.id;
      this.floatCardKey++;
    }
  },
  mounted() {
    this.favoritesKeys = Object.keys(window.localStorage);
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
  background: white;
  border-radius: 5px;
  padding: 5px 20px;
  border: 1px solid var(--pacific-blue);
}
.favorite-activity:hover{
  background: var(--soft-white);

}
h2{
  width:100%
}
h2:hover{
  cursor: pointer;
}
</style>