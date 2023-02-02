<template>
  <div>
    <h3>price</h3>
    <div>
      <fieldset>
        <div>
          <input type="checkbox" id="0" name="free">
          <label for="free">free</label>
        </div>
        <div>
          <input type="checkbox" id="1" name="payment">
          <label for="payment">requires payment</label>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "Price"
}
</script>

<style scoped>
fieldset{
  border: none;
  padding-left: 0;
}
input{
  margin-right: 5px;
}
</style>