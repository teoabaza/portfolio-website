<template>
  <div class="vl-parent">
    <loading  
        :active="true"
        loader="spinner"
        color="#E784A0"
        background-color="#090909"
        :height="150"
        :width="150"
        :opacity="0.4"
        :can-cancel="false"
        :is-full-page="true"
      />
  </div>
</template>

<script setup>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

</script>