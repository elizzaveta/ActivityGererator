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
    <div class="right-links-wrapper">
      <router-link to="/"><h2>Home</h2></router-link>
      <router-link to="/about"><h2>About</h2></router-link>
      <router-link to="/favorites"><h2>Favorites</h2></router-link>
      <router-link to="/settings/appearance">
        <h2>Settings</h2>
<!--          <img id="settingsIcon" class="theme-icon" src="../icons/settingsIcon.svg" alt="settings icon"/>-->
      </router-link>
        <!--      <img class="theme-icon" :src="changeThemeIcon" alt="theme icon" @click="handleThemeChange"/>-->
    </div>
  </div>
</template>

<script>
import {uiAccentColors, uiThemeColors} from "@/config/config";
import settingsIconGray from "../icons/settingsIconGray.png"
import settingsIconWhite from "../icons/settingsIconWhite.png"

export default {
  name: "Header",
  data() {
    return {
      theme: uiThemeColors.LIGHT,
      localStorageThemeKey: "theme",
      settingsIcon: settingsIconGray,
      iconKey: 1
    }
  },
  methods: {
    setTheme(uiThemeColor, uiAccentColor) {
      document.getElementsByTagName("body").item(0).className = uiThemeColor + ' ' + uiAccentColor;
      if(uiThemeColor === uiThemeColors.DARK) {
        this.settingsIcon = settingsIconWhite;
      }else{
        this.settingsIcon = settingsIconGray;
      }
    },
    getUiThemeColor(themeString){
      switch (themeString){
        case uiThemeColors.DARK: return uiThemeColors.DARK;
        case uiThemeColors.LIGHT: return uiThemeColors.LIGHT;
        default: return uiThemeColors.LIGHT;
      }
    },
    getUiAccentColor(accentColorString){
      switch (accentColorString){
        case uiAccentColors.PINK: return uiAccentColors.PINK;
        case uiAccentColors.GREEN: return uiAccentColors.GREEN;
        case uiAccentColors.BLUE: return uiAccentColors.BLUE;
        default: return uiAccentColors.PINK;
      }
    }
  },
  mounted() {
    let localStorageTheme = JSON.parse(window.localStorage.getItem(this.localStorageThemeKey))?.themeMode;
    let localStorageAccentColor = JSON.parse(window.localStorage.getItem(this.localStorageThemeKey))?.accentColor;
    let uiThemeColor = this.getUiThemeColor(localStorageTheme);
    let uiAccentColor = this.getUiAccentColor(localStorageAccentColor);
    this.setTheme(uiThemeColor, uiAccentColor);
  }
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

a {
  color: var(--accent-color);
}

.theme-icon {
  height: 20px;
  width: 20px;
  cursor: pointer;
}
svg{
  fill: red;
}
.right-links-wrapper {
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 14px;
}
</style>