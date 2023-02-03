<template>
  <div v-if="activity" class="container">
    <div class="wrapper">
      <CrossIcon @click="closeFloatCard"/>
      <div class="activity-container">
        <h2 id="activity-description">
          {{ activity.activity }}
        </h2>
        <div class="filters">
          <p>type: {{ activity.type }}</p>
          <p>participants: {{ activity.participants }}</p>
          <p>cost: {{ activity.cost? activity.cost : "0" }}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-if="activity" @click="closeFloatCard" class="shadow"/>
</template>

<script>
import {GET} from "@/api/GET";
import CrossIcon from "@/components/CrossIcon.vue";

export default {
  name: "ActivityFloatCard",
  components: {CrossIcon},
  data(){
    return{
      activity: null
    }
  },
  props:["activityId"],
  methods:{
    closeFloatCard(){
      this.activity=null;
    }
  },
  async mounted() {
    if(this.$props.activityId !== null){
      const data = await GET(`?key=${this.$props.activityId}`);
      this.activity = data.value;

    }
  }
}

</script>

<style scoped>

.wrapper {
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 60vw;
  padding: 100px 0;
  border-radius: 20px;
  border: 1px solid var(--blue);
  z-index: 3;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -30vw;
}
.activity-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
}
.filters{
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: dimgrey;
}
.shadow{
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.18);
}
</style>