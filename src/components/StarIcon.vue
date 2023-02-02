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
      src: imageDisabledStar
    }
  },
  methods:{
    handleClick(){
      if(window.localStorage.getItem(this.$props.activityKey)){
        window.localStorage.removeItem(this.$props.activityKey);
        this.src = this.disabledStar;
      }else{
        const activityDescription = document.getElementById("activity-description").innerText;
        window.localStorage.setItem(this.$props.activityKey, activityDescription);
        this.src = this.activeStar;
      }
    },


  },
  mounted() {
    if(window.localStorage.getItem(this.$props.activityKey)){
      this.src = this.activeStar;
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