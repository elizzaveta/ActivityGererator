<template>
  <img id="star" @click="handleClick" class="star-icon" :src="src" alt="save"/>
</template>

<script>
import imageActiveStar from "../icons/activeStar.png"
import imageDisabledStar from "../icons/disabledStar.png"
export default {
  props:['activityKey'],
  data(){
    return{
      activeStar: imageActiveStar,
      disabledStar: imageDisabledStar,
      src: imageDisabledStar,
      localStorageFavoritesKey: "favorites"
    }
  },
  methods:{
    handleClick(){
      let favorites = JSON.parse(window.localStorage.getItem(this.localStorageFavoritesKey));
      if(favorites){
        let targetActivity = favorites.filter((activity) => {
          return activity.id === this.$props.activityKey;
        })
        if(targetActivity.length === 0){
          this.addToFavorites(this.$props.activityKey, favorites);
        }else{
          this.removeFromFavorites(targetActivity[0], favorites);
        }

      }else {
        window.localStorage.setItem(this.localStorageFavoritesKey, JSON.stringify([]));
        this.addToFavorites(this.$props.activityKey, []);
      }

    },
    addToFavorites(activityIndex, favorites){
      const activityDescription = document.getElementById("activity-description").innerText;
      const newFavoriteActivity = {
        id: activityIndex,
        text: activityDescription
      }
      favorites.push(newFavoriteActivity);
      window.localStorage.setItem(this.localStorageFavoritesKey, JSON.stringify(favorites));
      this.src = this.activeStar;
    },
    removeFromFavorites(targetActivity, favorites){
      favorites.splice(favorites.indexOf(targetActivity), 1);
      window.localStorage.setItem(this.localStorageFavoritesKey, JSON.stringify(favorites));
      this.src = this.disabledStar;
    }

  },
  mounted() {
    let favorites = JSON.parse(window.localStorage.getItem("favorites"));
    if(favorites?.length !== 0){
      let targetActivity = favorites.filter((activity)=>{
        return activity.id === this.$props.activityKey;
      })
      if(targetActivity.length !== 0){
        this.src = this.activeStar;

      }
    }
  }
}
</script>

<style scoped>
.star-icon{
  height: 30px;
  width: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
}
.star-icon:hover{
  cursor: pointer;
}
</style>