<template>
  <div class="type-filter">
    <h3>Type</h3>
    <div>


<!--      <div>-->
<!--        <label class="typo__label">Tagging</label>-->
<!--        <multiselect v-model="value"-->
<!--                     options="options"  track-by="code" multiple="true" taggable="true"-->
<!--                     @tag="addTag"></multiselect>-->
<!--        <pre class="language-json"><code>{{ value }}</code></pre>-->
<!--      </div>-->


      <fieldset>
        <div>
          <input type="checkbox" id="education" name="education">
          <label for="education">education</label>
        </div>
        <div>
          <input type="checkbox" id="recreational" name="recreational">
          <label for="recreational">recreational</label>
        </div>
        <div>
          <input type="checkbox" id="social" name="social">
          <label for="social">social</label>
        </div>
        <div>
          <input type="checkbox" id="diy" name="diy">
          <label for="diy">diy</label>
        </div>
        <div>
          <input type="checkbox" id="charity" name="charity">
          <label for="charity">charity</label>
        </div>
        <div>
          <input type="checkbox" id="cooking" name="cooking">
          <label for="cooking">cooking</label>
        </div>
        <div>
          <input type="checkbox" id="relaxation" name="relaxation">
          <label for="relaxation">relaxation</label>
        </div>
        <div>
          <input type="checkbox" id="music" name="music">
          <label for="music">music</label>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  data() {
    return {
      value: [],
      options: [
        {name: 'Vue.js', code: 'vu'},
        {name: 'Javascript', code: 'js'},
        {name: 'Open Source', code: 'os'}
      ]
    }
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    }
  }

}
</script>

<style scoped>

input {
  margin-right: 5px;
}

fieldset {
  border: none;
  padding-left: 0;
}
</style>