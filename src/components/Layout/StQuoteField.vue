<template>
  <div class="quoteContainer">
    <img src="../../../public/img/quoteText.svg" alt="" />
  </div>
</template>
<script>
export default {
  name: "st-quote-field"
};
</script>
<style scoped>
.quoteContainer {
  display: flex;
  width: 80vw;
  height: 20vh;
}

.quoteContainer > img {
  width: 100%;
}
</style>
