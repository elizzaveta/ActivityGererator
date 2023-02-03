<template>
  <div class="wrapper">
    <h3>Source Code: <a href="https://github.com/elizzaveta/ActivityGererator">@elizzaveta</a></h3>
    <h3>API: <a href="https://www.boredapi.com/">The Bored API</a></h3>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 0 0;
}
a{
  color: #f9f9f9;
}
a:hover{
  text-decoration: underline;
}

</style>