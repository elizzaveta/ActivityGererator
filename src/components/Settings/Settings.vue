<template>
  <div class="wrapper">
    <div class="settings-menu">
      <h2>Settings</h2>
      <div class="settings-menu-links">
        <router-link to="/settings/appearance"><h3>Appearance</h3></router-link>
        <router-link to="/settings/data"><h3>Data</h3></router-link>
      </div>
    </div>
    <div class="settings-details">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppearanceTab from "@/components/Settings/Appearance/AppearanceTab.vue";

export default {
  components: {AppearanceTab}
}
</script>

<style scoped>
.wrapper{
  background: var(--secondary-color);
  border-radius: 5px;
  border: 1px solid var(--accent-color);
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  color: var(--text-color);
}
.settings-menu{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
a{
  color: var(--text-color);
}
.settings-menu-links{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
@media (min-width: 1000px) {
  .wrapper{
    padding: 40px 40px;
    gap:60px;
  }
}
@media (max-width: 1000px) {
  .wrapper{
    padding: 10px 10px;
    gap:20px;
  }
}
</style>