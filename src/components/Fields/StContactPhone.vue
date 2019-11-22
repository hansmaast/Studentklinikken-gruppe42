<template>
  <div class="fieldContainer">
    <div class="iconContainer">
      <img src="../../../public/icon/phoneIcon.svg" alt="" />
    </div>
    <p>{{ this.phoneNr }}</p>
  </div>
</template>
<script>
export default {
  name: "st-contact-phone",
  props: {
    phoneNr: String
  }
};
</script>

<style scoped>
p {
  font-size: 14px;
}

.fieldContainer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5%;
  box-sizing: border-box;
}

.iconContainer {
  grid-area: b;
  height: 20px;
  width: 20px;
  margin-right: 10px;
}

.iconContainer > img {
  width: 100%;
  height: 100%;
}
</style>
