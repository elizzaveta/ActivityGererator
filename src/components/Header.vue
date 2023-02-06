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
      <router-link to="/favorites"><h2>Favorites</h2></router-link>
      <img class="theme-icon" :src="changeThemeIcon" alt="theme icon" @click="handleThemeChange"/>
    </div>
  </div>
</template>

<script>
import {uiThemeColors} from "@/config/config";
import themeIconBlack from "../icons/themeIconBlack.png"
import themeIconWhite from "../icons/themeIconWhite.png"

export default {
  name: "Header",
  data(){
    return{
      theme: uiThemeColors.LIGHT,
      changeThemeIcon: themeIconBlack,
      localStorageThemeKey: "theme"
    }
  },
  methods :{
    handleThemeChange(){
      this.theme = this.theme===uiThemeColors.LIGHT ? uiThemeColors.DARK : uiThemeColors.LIGHT;
      this.changeThemeIcon = this.changeThemeIcon === themeIconBlack ? themeIconWhite : themeIconBlack;
      document.getElementsByTagName("body").item(0).className = this.theme;
      this.addThemeToLocalStorage(this.theme);
    },
    setTheme(theme){
      this.theme = theme;
      this.changeThemeIcon = theme === uiThemeColors.LIGHT ? themeIconBlack : themeIconWhite;
      document.getElementsByTagName("body").item(0).className = this.theme;
    },
    addThemeToLocalStorage(theme){
      window.localStorage.setItem(this.localStorageThemeKey, theme);
    }
  },
  mounted() {
    let localStorageTheme = window.localStorage.getItem(this.localStorageThemeKey);
    if(localStorageTheme){
      localStorageTheme === uiThemeColors.DARK ? this.setTheme(uiThemeColors.DARK) : null;
    }
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
a{
  color: var(--blue)
}
.theme-icon{
  height: 25px;
  width: 25px;
  cursor: pointer;
}
.right-links-wrapper{
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>