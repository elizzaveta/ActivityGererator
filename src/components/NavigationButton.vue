<template>
  <router-link :to="this.$props.to">
    <button>
      <h3>
        {{ this.$props.text }}
      </h3>
    </button>
  </router-link>
</template>

<script>
export default {
  props: ["text", "to"]
}
</script>

<style scoped>
button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: var(--pacific-blue);
  color: white;
}
</style>