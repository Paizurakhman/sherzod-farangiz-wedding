<template>
  <div class="info-section">
    <div class="container">
      <h2>Toʻy vaqti va manzili</h2>
      <div class="row">
        <div class="col-12 py-4 info-item">
          <i class="fa-regular fa-clock"></i>
          <div class="title">Vaqti:</div>
          <div class="subtitle">6-noyabr, 18:00</div>
        </div>
        <div class="col-12 py-4 info-item">
          <i class="fa-solid fa-location-dot"></i>
          <div class="title">Manzil:</div>
          <div class="subtitle">Toshkent shahri</div>
        </div>
        <div class="col-12 py-4 info-item">
          <i class="fa-solid fa-champagne-glasses"></i>
          <div class="title">Restoran:</div>
          <div class="subtitle">"Shosh" restorani</div>
        </div>
      </div>
      <h2>Toʻy egalari:</h2>
      <div class="name">
        Farruh - Saodat
      </div>
      <div class="invite-text">
        Toʻyimizning aziz mehmoni boʻling!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoSection"
}
</script>

<style scoped lang="scss">
.info-section {
  min-height: 50vh;
  background-image: linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url("@/assets/images/info-bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: grid;
  place-items: center;
  text-align: center;
  .container {
    max-width: 960px;
    margin: 0 auto;
  }
  padding: 48px 16px 16px;
  .row {
    margin: 16px 0 8px;
    gap: 12px;
  }

  .info-item {
    i {
      display: block;
      font-size: 1.4rem;
      color: #9a7b4f;
      margin-bottom: 8px;
    }
    padding: 18px 16px !important;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(61, 53, 41, 0.08);
  }
  .title {
    //color: rgb(175, 197, 159);
    font-size: 1.25em;
    font-weight: 400;
  }
  .subtitle {
    font-size: 1em;
    font-weight: 400;
  }
  h2 {
    font-size: 1.5em;
    line-height: 2.5rem;
    margin: 1.5rem 0 0;
  }
  .name {
    font-family: AsylbekMo, Arial, sans-serif;
    font-weight: 600;
    color: #9a7b4f;
    font-size: 2.6rem;
  }
  .invite-text {
    font-weight: 600;
    font-style: italic;
    font-size: 1.15rem;
    margin: 1.25rem 0 2rem;
  }
}
</style>
