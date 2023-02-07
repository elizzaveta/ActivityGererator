<template>
  <div class="participants-filter">
    <h3>Participants</h3>
    <div>
      <input type="number" placeholder="n" min="1"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Participants"
}
</script>

<style scoped>
input{
  width: 40px;
}
.participants-filter{
  display: flex;
  gap: 5px;
}
</style>