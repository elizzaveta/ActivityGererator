<template>
  <div class="wrapper">
    <div>
      <router-link to="/">
        <h1>
          <span class="green">B</span>
          <span class="pink">O</span>
          <span class="dark-blue">R</span>
          <span class="blue">E</span>
          <span class="orange">D</span>
          <span class="light-blue">?</span>
        </h1>
      </router-link>
      <h3 class="light-gray">Activity generator</h3>
    </div>
    <div>
      <router-link to="/favorites"><h2>Favorites</h2></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.green {
  color: var(--green);
}

.pink {
  color: var(--pink);
}

.dark-blue {
  color: var(--dark-blue);
}

.blue {
  color: var(--blue);
}

.orange {
  color: var(--orange);
}

.light-blue {
  color: var(--pacific-blue);
}

.light-gray {
  color: var(--light-gray);
}
a{
  color: var(--blue)
}
</style>