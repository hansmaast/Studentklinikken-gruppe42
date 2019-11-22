<template>
  <button class="st-small-btn">{{ label }}</button>
</template>

<script>
export default {
  name: "st-small-btn",
  props: {
    label: String
  }
};
</script>

<style scoped>
.st-small-btn {
  position: relative;
  width: 90vw;
  font-size: 12px;
  font-weight: bold;
  max-width: 105px;
  max-height: 30px;
  text-align: center;
  background-color: #77999e;
  border-radius: 50px;
  outline: none;
  color: white;
}
</style>
