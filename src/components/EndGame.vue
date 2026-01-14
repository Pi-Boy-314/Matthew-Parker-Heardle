<script setup lang="ts">

import SoundcloudMusicLink from "@/components/SoundcloudMusicLink.vue";
import GuessSummary from "@/components/GuessSummary.vue";
import IconShare from "@/components/icons/IconShare.vue";

import settings from "@/settings/settings.json"

import { currentGameState, ParseStringWithVariable } from "@/main";
import TransportBar from "@/components/TransportBar.vue";

// calculate time
setInterval(()=>{
  const timer = document.getElementById("timer");

  const tommorowDateFull = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  const tommorowDateMidnight = new Date(tommorowDateFull.getFullYear(), tommorowDateFull.getMonth(), tommorowDateFull.getDate(), 0, 0, 0, 0);

  const timeBetween = tommorowDateMidnight.getTime() - new Date().getTime();

  let timeBetweenInSecond = Math.floor(timeBetween/1000)

  if(timeBetweenInSecond <= 0) {
    window.location.reload();
  }

  let hours = 0;
  while(timeBetweenInSecond > (60*60)) {
    hours += 1;
    timeBetweenInSecond -= (60*60);
  }

  let minutes = 0;
  while(timeBetweenInSecond > (60)) {
    minutes += 1;
    timeBetweenInSecond -= (60);
  }

  timer.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${timeBetweenInSecond.toString().padStart(2, "0")}`;

}, 300);
</script>

<template>
  <div class="max-w-screen-sm main-container">
    <div v-if="currentGameState.guessed.length > 0">
      <SoundcloudMusicLink :is-won="currentGameState.guessed[currentGameState.guessed.length-1].isCorrect"/>
      
      <div class="summary-container">
        <p class="guess-number font-big"> 
          {{ currentGameState.guessed[currentGameState.guessed.length-1].isCorrect ? currentGameState.guessed.length.toString() : '0' }} 
        </p>
        <GuessSummary class="summary"/>
        <div class="share">
          <button class="font-medium">
            {{ ParseStringWithVariable(settings["phrases"]["share-button"]) }}
            <IconShare class="inline-block ml-2"/>
          </button>
        </div>
      </div>

      <div class="timer-container">
        <div class="next-text font-medium"> 
          {{ ParseStringWithVariable(settings["phrases"]["timer-text"]) }} 
        </div>
        <div id="timer" class="font-big">14:25:42</div>
      </div>
    </div> <div v-else>
      <div class="next-button-container">
        <button class="font-medium" onclick="window.location.reload()"> 
          {{ ParseStringWithVariable(settings["phrases"]["next-button"]) }} 
        </button>
      </div>
    </div>
  </div>
  <TransportBar/>
</template>

<style scoped>
.main-container{
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 100%;
  height: 100%;

  margin: 0 auto;

  overflow: auto
}

.summary-container {
  text-align: center;
  padding: 0 0.75rem;

  .guess-number {
    color: var(--color-lg)
  }
  .summary{
    justify-content: center;
    display: flex;
    margin: 0.5rem 0;
  }
  .second-text {
    padding: 0.25rem 0;
    line-height: 1.75rem;
  }
  .share {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-top: 0.75rem;

    button {
      display: flex;

      align-items: center;

      padding: 0.5rem;
      text-transform: uppercase;

      text-indent: 0.25em;
      letter-spacing: 0.2em;

      border: none;

      background-color: var(--color-positive);
    }
  }
}

.timer-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0.75rem 1.5rem;

  .next-text{
    text-align: center;
    color: var(--color-lg);
  }

  #timer {
    text-indent: 0.25em;
    letter-spacing: 0.2em;
  }
}

.next-button-container{
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 3.5rem 0;

  button {
    text-transform: uppercase;

    text-indent: 0.25em;
    letter-spacing: 0.2em;
    font-weight: 10;

    padding: 0.5rem;

    background: var(--color-submit);

    border-style: none;

    align-items: center;
    display: flex;

    cursor: pointer;
  }
}
</style>