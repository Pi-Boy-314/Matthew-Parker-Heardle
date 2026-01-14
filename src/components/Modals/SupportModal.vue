<script setup lang="ts">
import {onMounted} from "vue";
import settings from "@/settings/settings.json"

onMounted(()=>{
  document.getElementById("modal-title").innerHTML = "Support";
})
</script>

<template>
  <p>Like the game or have questions? Let @pi_boy_314 know in Discord</p>
  <p></p>
</template>

<style scoped>
p {
  margin-bottom: 0.75rem;
}

</style>