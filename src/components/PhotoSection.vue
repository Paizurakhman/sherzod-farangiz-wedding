<template>
  <div class="photo-section">
    <div class="bg-photo">
      <img src="@/assets/images/wave-top.svg" alt="">
      <img src="@/assets/images/wave-bottom.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoSection"
}
</script>

<style scoped lang="scss">
.photo-section {
  position: relative;
  overflow: hidden;
  .bg-photo {

    background: linear-gradient(rgba(175, 197, 159, 0), rgba(175, 197, 159, 0)), url("@/assets/images/photo.jpg") center center / cover no-repeat fixed;
    img {
      position: absolute;
      left: 0;
      width: 100%;
      height: auto;
      &:first-child {
        top: 0;
      }
      &:last-child {
        bottom: 0;
      }
      display: none;
    }

    min-height: 55vh;
    background-attachment: scroll;
    background-position: 70% center;
  }
}
</style>
