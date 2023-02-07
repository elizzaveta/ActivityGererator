<template>
  <div class="wrapper">
    <input type="radio"
           :id="accentColor.className"
           name="radio2"
           @change="this.handleCheckboxClick"
           :checked="this.checked">
    <p :class="accentColor.className" @click="handleElementClick">{{ accentColor.name }}</p>
  </div>
</template>

<script>
import {uiThemeColors} from "@/config/config";

export default {
  name: "AccentColorTemplate",
  props: ['accentColor'],
  data() {
    return {
      checked: false
    }
  },
  methods: {
    handleElementClick(){
      document.getElementById(this.$props.accentColor.className).click();
    },
    handleCheckboxClick() {
      let localStorageTheme = JSON.parse(window.localStorage.getItem("theme"));
      let themeMode = uiThemeColors.LIGHT;
      if (localStorageTheme) {
        themeMode = localStorageTheme.themeMode;
      }

      document.getElementsByTagName("body")[0].className = themeMode + ' ' + this.$props.accentColor.className;

      if (!localStorageTheme) {
        localStorageTheme = {
          themeMode: "",
          accentColor: ""
        }
      }
      localStorageTheme.accentColor = this.$props.accentColor.className;
      window.localStorage.setItem("theme", JSON.stringify(localStorageTheme));
    }
  },
  mounted() {
    let localStorageColor = JSON.parse(window.localStorage.getItem("theme"))?.accentColor
    if (localStorageColor !== "" && localStorageColor === this.$props.accentColor.className) {
      this.checked = true;
    } else if ((localStorageColor === "" || !localStorageColor) && this.$props.accentColor.tag === "default") {
      this.checked = true;
    }

  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  gap: 5px;
}
p{
  color: var(--accent-color);
  cursor: pointer;
}
</style>