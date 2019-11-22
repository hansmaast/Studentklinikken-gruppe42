<template>
  <button class="st-big-btn">{{ label }}</button>
</template>

<script>
export default {
  name: "st-big-btn",
  props: {
    label: String
  }
};
</script>

<style scoped>
.st-big-btn {
  position: relative;
  width: 90vw;
  max-width: 308px;
  font-size: 18px;
  font-weight: 600;
  background-color: #77999e;
  border-radius: 50px;
  margin-bottom: 15px;
  color: white;
  font-size: medium;
}
</style>
