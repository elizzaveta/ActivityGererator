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
import Types from "@/components/Favorites/Filters/Types.vue";
import Participants from "@/components/Favorites/Filters/Participants.vue";
import Price from "@/components/Favorites/Filters/Price.vue";
import Multiselect from "@/components/Favorites/Filters/Multiselect.vue";

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