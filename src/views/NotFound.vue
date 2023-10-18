<template>
  <div class="not-found-page">
    <img src="@/assets/images/not-found.gif" class="not-found-img"/>
    <button id="back-btn" @click="goBack">Go Back</button>
  </div>
</template>

<script setup>

function goBack(){
  window.history.back();
}

</script>

<style scoped>
.not-found-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.not-found-img {
  max-width: 60vw;
}
#back-btn {
  font-size: 1.2rem;
  background-color: transparent;
  color: white;
  border:none;
  border-radius: 10px;
  box-shadow: rgba(193, 169, 212, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  padding: 0.5rem 1rem;
  margin-top: 2rem;
}
#back-btn:hover {
  background-color: #5d485d5b;
  cursor: pointer;
}
</style>
