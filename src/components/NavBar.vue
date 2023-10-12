<template>
  <div class="navbar">
    <ul class="navbar-items">
      <li><a href="/home">Home</a></li>
      <li><a href="/about">About me</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
</template>

<script setup>

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
</style>