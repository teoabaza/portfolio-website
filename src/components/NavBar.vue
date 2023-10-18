<template>
  <div :class="(currentRoute == '/home' || currentRoute == '/') ? 'navbar nav-desktop' : 'navbar'">
    <div id="job-title" v-if="currentRoute == '/home' || currentRoute == '/'">
      <h4>Teo Abaza</h4>
      <p>Software Developer</p>
      <p>UI/UX Designer</p>
    </div>
    <ul class="navbar-items">
      <li :class="{ 'active': currentRoute == '/home' || currentRoute == '/' }"><a href="/home">Home</a></li>
      <li :class="{ 'active': currentRoute == '/about' }"><a href="/about">About me</a></li>
      <li :class="{ 'active': currentRoute == '/projects' }"><a href="/projects">Projects</a></li>
      <li :class="{ 'active': currentRoute == '/contact' }"><a href="/contact">Contact</a></li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const currentRoute = ref(window.location.pathname);

onMounted(() => {
  window.addEventListener('popstate', () => {
    currentRoute.value = window.location.pathname;
  });
});

watch(currentRoute, (newValue, oldValue)=>{
  if(newValue && newValue!=oldValue && newValue!='/home'){
    document.getElementById('job-title').style.display = 'none';
  }
});

</script>

<style scoped>
.navbar {
  margin: 3rem 1rem 2rem 1rem;
}
.navbar-items li {
  text-transform: uppercase;
  font-family: 'Varta', Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  list-style-type: none;
  margin: 0.5rem;
  text-align: right;
}
.navbar-items a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
.navbar-items a:hover {
  color: #E784A0;
}
.active {
  color: #E784A0;
}
#job-title {
  display: none;
  margin: 0 3rem;
}
#job-title h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
  font-weight: 500;
}
#job-title p {
  margin: 0;
  font-size: 0.9rem;
  color: #BAB9B9;
}
</style>