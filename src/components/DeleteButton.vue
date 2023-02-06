<template>
  <button @click="removeSavedActivity">
    <h3>
      Remove
    </h3>
  </button>
</template>

<script>
export default {
  name: "DeleteButton",
  props:["activityId"],
  methods:{
    removeSavedActivity(){
      console.log(this.$props.activityId)
      const htmlActivityElement = document.getElementById(this.$props.activityId);
      let favorites = JSON.parse(window.localStorage.getItem("favorites"));
      let targetActivity = favorites.filter((activity) =>{
        return activity.id === this.$props.activityId;
      })
      favorites.splice(favorites.indexOf(targetActivity[0]), 1);
      window.localStorage.setItem("favorites", JSON.stringify(favorites));

      htmlActivityElement.remove();
    }
  }
}
</script>

<style scoped>
button {
  padding: 2px 5px;
  border: none;
  border-radius: 5px;
  background: var(--pacific-blue);
  color: white;
}
</style>