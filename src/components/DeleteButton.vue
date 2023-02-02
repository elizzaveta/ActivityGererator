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
      const htmlActivityElement = document.getElementById(this.$props.activityId);
      window.localStorage.removeItem(this.$props.activityId);
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