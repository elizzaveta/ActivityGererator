<template>
<div class="appearance-wrapper">
  <h1>Appearance</h1>
  <div class="setting-block">
    <h3>Theme</h3>
    <div class="themes-wrapper">
      <ThemeTemplate v-for="theme in this.uiThemes"  :theme="theme"/>
    </div>
  </div>
  <div class="setting-block">
    <div class="setting-block">
      <h3>Accent Color</h3>
      <AccentColorTemplate v-for="accentColor in this.uiAccentColors" :accent-color="accentColor"/>
    </div>
  </div>
</div>
</template>

<script>
import ThemeTemplate from "@/components/Settings/Appearance/ThemeTemplate.vue";
import {uiAccentSettings, uiThemeSettings} from "@/config/config";
import AccentColorTemplate from "@/components/Settings/Appearance/AccentColorTemplate.vue";
export default {
  name: "AppearanceTab",
  components: {AccentColorTemplate, ThemeTemplate},
  data(){
    return{
      uiThemes: uiThemeSettings,
      uiAccentColors: uiAccentSettings,
      picked: "light"
    }
  }
}
</script>

<style scoped>
.appearance-wrapper{
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 5px;
}

.themes-wrapper{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px
}
.setting-block{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>