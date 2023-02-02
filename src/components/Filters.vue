<template>
  <div class="wrapper">
    <h2>Filters</h2>
    <div class="filters">
      <Multiselect/>
      <Types/>
      <Participants/>
      <Price/>
    </div>
  </div>
</template>

<script>
import Types from "@/components/Filters/Types.vue";
import Participants from "@/components/Filters/Participants.vue";
import Price from "@/components/Filters/Price.vue";
import Multiselect from "@/components/Filters/Multiselect.vue";

export default {
  name: "Filters",
  components: {Multiselect, Price, Participants, Types}
}
</script>

<style scoped>
.filters{
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}
</style>