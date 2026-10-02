<template>
  <div class="calendar-section">
    <div class="container">
      <div class="calendar">
        <div class="calendar-header">
          <span class="calendar-month">Noyabr </span>
          <span class="calendar-year">2026</span>
        </div>
        <div class="calendar-body">
          <div class="calendar-weekday">
            <div>Du</div>
            <div>Se</div>
            <div>Ch</div>
            <div>Pa</div>
            <div>Ju</div>
            <div>Sh</div>
            <div>Ya</div>
          </div>
          <div class="calendar-days">
            <div v-for="i in 6" :key="`empty-${i}`"></div>
            <div v-for="i in 30" :key="i" :class="{ active: i === 6 }">{{i}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarSection"
}
</script>

<style scoped lang="scss">
  .calendar-section {
    font-family: 'Lumanosimo', cursive;
    position: relative;
    color: #3d3529;
    -webkit-background-clip: text;
    padding: 40px 0;
    text-shadow: none;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url("@/assets/images/calendar-bg.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      top: 0;
      left: 0;
      opacity: 0.3;
    }
    .container {
      display: flex;
      justify-content: center;
    }
    .calendar {
      flex: 1;
      height: max-content;
      max-width: 600px;
      position: relative;
      overflow: hidden;
      padding: 24px 12px 16px;
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(4px);
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(61, 53, 41, 0.12);

      &-header {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-size: 1.5rem;
        margin-bottom: 20px;
      }
      &-body {
        font-size: 1.25em;
      }
      &-weekday {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        font-weight: 700;
        div {
          display: grid;
          place-items: center;
        }
        font-size: .85rem;
        color: #9a7b4f;
        padding-bottom: 8px;
        margin-bottom: 4px;
        border-bottom: 1px solid rgba(154, 123, 79, 0.25);
      }
      &-days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        font-weight: 600;
        gap: 2px;

        div {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px;
          position: relative;
          height: 44px;
          font-size: 1rem;

          &.active {
            color: #b37832;
            font-weight: 700;
            &:before {
              content: "";
              width: 42px;
              height: 42px;

              position: absolute;
              background-image: url("@/assets/images/heart2.png");
              background-position: center;
              background-repeat: no-repeat;
              background-size: contain;
            }
          }
        }
      }
    }
  }
</style>
