<script setup lang="ts">
import {onMounted} from "vue";

onMounted(()=>{
  document.getElementById("modal-title").innerHTML = "About";
})
</script>

<template>
  <p>Sam Bowman Heardle is a version of Heardle that features songs from Sam Bowman's Discography.</p>
  <p>Forked from <a href="https://github.com/s4pph1r3-dev/Heardle-Base">Heardle-Base</a>.</p>
  <p>Volume Slider and Scroll Bar code by <a href="https://github.com/morgvanny">morgvanny</a>.</p>
  <p>Metadata code by <a href="https://www.fiverr.com/gema_designer">gema_designer</a>.</p>
</template>

<style scoped>
p {
  margin-bottom: 0.75rem;
}
</style>