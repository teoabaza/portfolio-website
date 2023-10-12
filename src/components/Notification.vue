<template>
  <div class="notification" v-if="showNotification" :style="{'--bgColour': notificationColour}">
    <div class="notification-title">{{ notificationTitle }}</div>
    <div class="notification-text">{{ notificationText }}</div>
  </div>
</template>

<script setup>
import { showNotification, notificationTitle, notificationText, notificationColour } from '../hooks/globals';

const props = defineProps({
  title: String,
  text: String
});

</script>

<style scoped>
.notification {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #81506ae3;
  width: fit-content;
  min-width: 15rem;
  min-height: 5rem;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem 2rem;
  z-index: 3;
}
.notification-title {
  font-size: 1.5rem;
}
</style>