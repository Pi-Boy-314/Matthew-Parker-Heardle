<script setup lang="ts">

</script>

<template>
  <div class="soundcloud-logo">
    <div class="yt-logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="22" viewBox="0 0 100 22">
        <g>
          <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 0 14.285 0 14.285 0C14.285 0 5.35042 0 3.12324 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C0 5.35042 0 10 0 10C0 10 0 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12324 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5701 5.35042 27.9727 3.12324Z" fill="#FF0000" />
          <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white" />
        </g>
        <text x="32" y="16" font-family="Arial, sans-serif" font-weight="bold" font-size="14" fill="currentColor">YouTube</text>
      </svg>
    </div>

    <div class="arrow-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 18l6-6-6-6"></path>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.soundcloud-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: inherit;
}

.yt-logo {
  display: flex;
  align-items: center;
}

.arrow-icon {
  display: flex;
  align-items: center;
  opacity: 0.8;
}
</style>