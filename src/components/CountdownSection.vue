<template>
  <div class="countdown">
    <div class="container">
      <div class="countdown-content">
        <ul>
          <li class="countdown__item">
            <div>{{ days }}</div>
            <p class="desktop">Kun</p>
            <p class="mobile">Kun</p>
          </li>
          <li class="divider">
            <span>:</span>
          </li>
          <li class="countdown__item">
            <div>{{ hours }}</div>
            <p class="desktop">Soat</p>
            <p class="mobile">Soat</p>
          </li>
          <li class="divider">
            <span>:</span>
          </li>
          <li class="countdown__item">
            <div>{{ minutes }}</div>
            <p class="desktop">Daqiqa</p>
            <p class="mobile">Daq</p>
          </li>
          <li class="divider">
            <span>:</span>
          </li>
          <li class="countdown__item">
            <div>{{ seconds }}</div>
            <p class="desktop">Soniya</p>
            <p class="mobile">Son</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "CountdownSection",
  setup() {
    const days = ref('0')
    const hours = ref('0')
    const minutes = ref('0')
    const seconds = ref('0')

    const countDownDate = new Date("Nov 6, 2026 18:00:00").getTime();

    const countdown = setInterval(() => {
      let now = new Date().getTime()

      let distance = countDownDate - now

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      days.value = d.toString().padStart(2, '0')
      hours.value = h.toString().padStart(2, '0')
      minutes.value = m.toString().padStart(2, '0')
      seconds.value = s.toString().padStart(2, '0')

      if (distance / 1000 < 1) {
        clearInterval(countdown)
      }
    }, 1000)

    return {days, hours, minutes, seconds}
  }
}
</script>

<style scoped lang="scss">
.countdown {
  display: grid;
  place-items: center;
  color: #181818;
  font-family: 'Lumanosimo', cursive;
  background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(@/assets/images/timer-bg.jpg) center center / cover no-repeat;
  min-height: 0;
  padding: 48px 0;

  &-content {
    p {
      margin-bottom: 0;
      font-size: .85rem;
    }
    ul {
      display: flex;
      max-width: 800px;
      align-items: flex-start;
      margin: 0 auto;
      justify-content: center;
      gap: 10px;

      li.divider {
        display: grid;
        place-content: center;
        height: 64px;
        font-size: 1.5rem;
        color: #9a7b4f;
      }
    }
  }
  &__item  {
    text-align: center;
    div {
      display: grid;
      place-content: center;
      margin-bottom: 10px;
      background-color: white;
      box-shadow: rgba(2, 58, 21, 0.15) 0px 9px 22px 0px;

      width: 64px;
      height: 64px;
      font-size: 1.6rem;
      border-radius: 14px;
    }
  }
}
</style>
