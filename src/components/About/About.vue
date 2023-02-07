<template>
  <div class="wrapper">
    <h1>About this site</h1>
    <h2>Idea</h2>
    <p>
      BORED? site helps to fight boredom. Here you can find things to do when there is nothing to do.
    </p>
    <p>Site is created for learning purposes.</p>
    <h2>
      Features
    </h2>
    <ul>
      <li>
        Activity Generator
      </li>
      <li>
        Save favorite activities
      </li>
      <li>
        Change ui theme colors
      </li>
      <li>
        Manage your data
      </li>
    </ul>
    <h2>Tech stack</h2>
    <p>
      Page is created with Vue.js.
    </p>
    <h2>API</h2>
    <p>
      This site uses
      <a href="https://www.boredapi.com/" target="_blank">Bored API</a>
      to get activities data.
    </p>
    <h2>Source Code</h2>
    <p>
      Source code of this project is placed on
      <a href="https://github.com/elizzaveta/ActivityGererator" target="_blank">GitHub</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
.wrapper {
  border: 1px solid var(--accent-color);
  border-radius: 5px;
  padding: 30px;
}
.wrapper h2{
  margin: 15px 0 5px 0;
  color: var(--accent-color)
}
h1{
  color: var(--text-color);
}
p{
  color: var(--text-color);
}
a {
  text-decoration: underline;
  color: var(--text-color);
}
</style>