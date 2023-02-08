<template>
<div class="wrapper" @click="handleElementClick">
  <img :src="theme.image" :alt="theme.name + ' theme'"/>
  <div class="checkbox-wrapper">
    <input type="radio" :id="theme.className" name="radio" @change="this.handleCheckboxClick" :checked="this.checked">
    <p>{{theme.name}}</p>
  </div>
</div>
</template>

<script>
import {uiAccentColors} from "@/config/config";

export default {
  name: "ThemeTemplate",
  props: ['theme'],
  data(){
    return{
      checked: false
    }
  },
  methods:{
    handleCheckboxClick(){
      this.changeTheme();
    },
    handleElementClick(){
      document.getElementById(this.$props.theme.className).click();
    },
    changeTheme(){
      let localStorageTheme = JSON.parse(window.localStorage.getItem("theme"));
      let accentColor = uiAccentColors.PINK;
      if(localStorageTheme){
        accentColor = localStorageTheme.accentColor;
      }

      document.getElementsByTagName("body")[0].className = this.$props.theme.className + ' ' + accentColor;
      let element = document.getElementById("svgSettingsIcon");
      element.classList.value = this.$props.theme.className+"-svg"

      if(!localStorageTheme){
        localStorageTheme = {
          themeMode: "",
          accentColor: ""
        }
      }
      localStorageTheme.themeMode = this.$props.theme.className;
      window.localStorage.setItem("theme", JSON.stringify(localStorageTheme));
      let settings = document.getElementById("settingsIcon");
    }
  },
  mounted() {
    if(JSON.parse(window.localStorage.getItem("theme"))?.themeMode === this.$props.theme.className){
      this.checked = true;
    }
  }
}
</script>

<style scoped>
.wrapper{
  border: 1px solid var(--text-color);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  cursor: pointer;
}
.wrapper img{
  height: 153px;
  border-radius: 5px 5px 0 0;
  margin: 0;
}
.checkbox-wrapper{
  border-top: 1px solid var(--text-color);
  display: flex;
  gap: 10px;
  padding: 12px;
  align-items: center;
}
.checkbox{
  border-radius: 50%;
  height: 17px;
  width: 17px;
  border: 1px solid var(--text-color);
}

</style>