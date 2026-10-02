<template>
  <div class="invitation-section">
    <div class="container">
      <div class="invitation-text">
        <h2 v-if="name">Hurmatli {{name}}!</h2>
        <h2 v-else>Hurmatli qarindosh-urugʻlar, aka-uka, opa-singillar, quda-andalar, doʻst-birodarlar va hamkasblar!</h2>
      </div>

      <div class="invitation-text">
        <h2>Sizni farzandlarimiz</h2>
      </div>
      <div class="name">
        <h2>Sherzod va Farangizning</h2>
      </div>
      <div class="invitation-text">
        <h2>
          nikoh toʻyi munosabati bilan yozilgan dasturxonimizning aziz mehmoni boʻlishga taklif etamiz!
        </h2>
      </div>
    </div>

  </div>
</template>

<script>
import {useRoute} from "vue-router";

export default {
  name: "InvitationSection",
  setup() {
    const route = useRoute()
    const {name} = route.query

    return { name }
  }
}
</script>

<style scoped lang="scss">
  .invitation-section {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 56px 8px 48px;

    .invitation-text {
      h2 {
        font-size: 1.15rem;
        font-weight: 400;
        line-height: 1.6;
      }
      + .invitation-text {
        margin-top: 28px;
      }
    }
    .name {
      margin: 20px 0;
      font-family: AsylbekMo, Arial, sans-serif;
      h2 {
        color: #9a7b4f;
        font-size: 2.6rem;
        line-height: 1.2;
      }
      span {
        font-size: .5em;
      }
    }
  }
</style>
