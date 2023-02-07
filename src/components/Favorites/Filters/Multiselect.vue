<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <multiselect v-model="value" :options="options"></multiselect>
    </div>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";

export default {
  components: { Multiselect },
  data() {
    return {
      value: null,
      options: ["list", "of", "options"],
    };
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>