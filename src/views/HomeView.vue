<script setup>
import InvitationSection from "@/components/InvitationSection.vue";
import CalendarSection from "@/components/CalendarSection.vue";
import PhotoSection from "@/components/PhotoSection.vue";
import InfoSection from "@/components/InfoSection.vue";
import CountdownSection from "@/components/CountdownSection.vue";
import Modal from "@/components/Modal.vue";
import { ref} from "vue";
import AcceptForm from "@/components/AcceptForm.vue";
const showEnvelope = ref(false)
const audio = ref()
const isPlayed = ref(false)

const toggleAudio = () =>  {
  isPlayed.value = audio.value.paused
  if (audio.value.paused) {
    audio.value.play();
  } else {
    audio.value.pause();
  }
}

</script>

<template>
  <div class="page">
    <modal v-model="showEnvelope"/>
    <video-background
        src="video/wedding.mp4"
        class="hero"
        overlay="linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.45))"
    >
      <div class="video-bg">
        <div class="subtitle">Nikoh toʻyi</div>
        <div class="name">
          <span>Sherzod </span>
          <br>
          <span>&</span>
          <br>
          <span> Farangiz</span>
        </div>

        <p class="date">06.11.2026</p>

        <div class="scroll-hint"><i class="fa-solid fa-chevron-down"></i></div>

        <div class="audio">
          <div @click="toggleAudio" class="play">
            <i class="fa-solid fa-volume-high" v-if="isPlayed"></i>
            <i class="fa-solid fa-volume-xmark" v-else></i>
          </div>
          <audio id="audio-player" ref="audio" loop>
            <source src="@/assets/audio/music.mp3" type="audio/mpeg">
          </audio>
        </div>
      </div>
    </video-background>

    <InvitationSection/>
    <CalendarSection/>
    <PhotoSection/>
    <InfoSection/>
    <CountdownSection/>
    <AcceptForm />

    <footer class="footer">
      <p>Sizni toʻyimizda koʻrishni intiqlik bilan kutamiz!</p>
      <div class="footer-names">Sherzod & Farangiz</div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.page {
  max-width: 560px;
  min-height: 100vh;
  margin: 0 auto;
  background: #ffffff;
  overflow: hidden;
  box-shadow: 0 0 40px rgba(61, 53, 41, 0.12);
}

.hero {
  height: 100svh;
}

.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  text-shadow: 0 2px 12px rgba(0,0,0,0.35);

  .subtitle {
    font-size: .8rem;
    letter-spacing: .35em;
    text-transform: uppercase;
    margin-bottom: 16px;
    opacity: .9;
  }

  .name {
    font-family: AsylbekMo, Arial, sans-serif;
    span {
      font-size: 3.6em;
      line-height: 3.6rem;
    }
  }

  .date {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.25em;
    letter-spacing: .15em;
    margin-top: 16px;
    &:before,
    &:after {
      content: "";
      width: 40px;
      height: 1px;
      background: rgba(255,255,255,0.7);
    }
  }

  .scroll-hint {
    position: absolute;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.1rem;
    opacity: .8;
    animation: bounce 2s ease-in-out infinite;
    display: block;
  }
}

.footer {
  padding: 40px 16px 96px;
  background: #faf7f2;
  text-align: center;
  p {
    font-size: 1.25rem;
    font-style: italic;
    line-height: 1.6;
    max-width: 480px;
    margin: 0 auto 12px;
  }
  .footer-names {
    font-family: AsylbekMo, Arial, sans-serif;
    font-size: 2.4rem;
    color: #9a7b4f;
  }
}

@keyframes bounce {
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, 8px); }
}

.audio {
  position: fixed;
  height: 44px;
  width: 44px;
  margin: 0 auto;
  right: max(16px, calc(50vw - 264px));
  bottom: 16px;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(6px);
  color: #181818;
  border-radius: 50%;
  box-shadow: 0 4px 14px rgba(0,0,0,0.18);
  z-index: 1;
  .play {
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
  }
  i {
    font-size: 18px;
  }
  audio {
    display: none;
  }
}
</style>
