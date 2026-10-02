<template>
  <transition name="accept-modal">
    <div class="accept-modal" v-if="modelValue">
      <div class="accept-modal__container">
        <p class="accept-modal__success">
          <span class="icon"><i class="fa-solid fa-check"></i></span>
          <span>Rahmat! Maʼlumotlar muvaffaqiyatli yuborildi.</span>
        </p>
        <div class="box"></div>
        <div class="box">
          <span class="close" @click="$emit('update:modelValue', false)"></span>
        </div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AcceptModal",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.accept-modal {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.35);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  &-enter-from,
  &-leave-to {
    transform: scale(1.1);
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: 0.3s ease;
  }

  &__container {
    max-width: 360px;
    margin: 0 auto;
    position: relative;
    padding: 0 15px;
  }

  span.close {
    position: absolute;
    z-index: 1;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:before {
      content: "";
      background: #949494;
      width: 24px;
      height: 1.5px;
      transform: rotate(45deg);
      position: absolute;
    }
    &:after {
      content: "";
      position: absolute;
      background: #949494;

      width: 24px;
      height: 1.5px;
      transform: rotate(-45deg);
    }
  }

  p {
    position: relative;
    z-index: 2;
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 0;
  }
  .icon {
    width: 42px;
    height: 42px;
    margin: 0 auto 10px;
    border-radius: 50%;
    background: #4CAF50;
    display: grid;
    place-content: center;
    color: white;
    i {
      font-size: 1.5rem;
    }
  }
  .box {
    position: absolute;
    background-color: rgb(239,239,239);
    width: 50%;
    height: 100px;
    &:first-of-type {
      left: 0;
      top: calc(50% - 50px);
      transform: translateY(-49%) translateX(0.5px);
      clip-path: polygon(0 0,calc(100% - 10.00px) 0,100% 10.00px,100% 100%,10.00px 100%,0 calc(100% - 10.00px));
    }
    &:nth-of-type(2) {
      right: 0;
      top: calc(50% - 50px);
      transform: translateY(-49%) translateX(-0.5px);
      clip-path: polygon(0 10.00px,10.00px 0,100% 0,100% calc(100% - 10.00px),calc(100% - 10.00px) 100%,0 100%);
    }
    &:nth-of-type(3) {
      left: 0;
      top: 50%;
      transform: translateX(0.5px);
      clip-path: polygon(0 10.00px,10.00px 0,100% 0,100% calc(100% - 10.00px),calc(100% - 10.00px) 100%,0 100%);
    }
    &:last-of-type {
      right: 0;
      top: 50%;
      transform: translateX(-0.5px);
      clip-path: polygon(0 0,calc(100% - 10.00px) 0,100% 10.00px,100% 100%,10.00px 100%,0 calc(100% - 10.00px));
    }
  }
}
</style>
