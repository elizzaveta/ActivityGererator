<template>
  <div class="wrapper">
    <div class="activity-container" :id="`${key}`" >
      <StarIcon v-if="loaded" :activity-key='key' :key="starKey"/>
      <h2 id="activity-description">
        {{ activity }}
      </h2>
      <div v-if="loaded" class="filters" >
        <p>type: {{ type }}</p>
        <p>participants: {{ participants }}</p>
        <p>cost: {{ cost }}</p>
      </div>

    </div>
    <button id="generateButton" @click="fetchActivity">
      <h3>
        Generate
      </h3>
    </button>
  </div>
</template>

<script>
import {GET} from "@/api/GET";
import StarIcon from "@/components/StarIcon.vue";
import { onKeyStroke } from '@vueuse/core';
onKeyStroke(['ArrowUp'], (e) => {
  this.fetchActivity();
});

export default {

  components: {StarIcon},
  data() {
    return {
      loaded: false,
      key: "",
      activity: "Press 'Generate' button or press 'Enter' to get activity",
      type: "",
      participants: "",
      cost: "0",
      starKey: 0
    }
  },
  methods: {
    async fetchActivity() {
      const data = await GET("");
      this.key = data.value.key;
      this.activity = data.value.activity;
      this.type = data.value.type;
      this.participants = data.value.participants;
      this.cost = data.value.cost? data.value.cost : "0";
      this.loaded = true;
      this.starKey++;
    },
    handleEnterKeyPress(event){
      if(event.code === "Enter"){
        document.getElementById("generateButton").blur();
        this.fetchActivity();
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", this.handleEnterKeyPress);
  }

}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;

}

.activity-container {
  width: 100%;
  /*background: var(--secondary-color);*/
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid var(--accent-color);
  border-radius: 20px;
}
h2{
  text-align: center;
  margin-bottom: 5px
}
button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: var(--accent-color);
  color: var(--text-color);
}
.filters{
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: dimgrey;
}
@media (min-width: 800px) {
  .activity-container {
    height: 30vw;
  }
}

@media (max-width: 800px) {
  .activity-container {
    height: 40vh;
  }
}
</style>