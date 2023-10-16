<template>
  <div class="projects-page">
    <div class="project-box project1" @click="router.push('/project1')">
      <h3>Sandbach School Cautions Register</h3>
      <p>behaviour management web application</p>
    </div>
    <div class="project-box project2" @click="router.push('/project2')">
      <h3>Workfolio</h3>
      <p>task management web application</p>
    </div>
    <div class="project-box project3" @click="router.push('/project3')">
      <h3>Quizzlet</h3>
      <p>quizzes and flaschards creation tool</p>
    </div>
    <div class="project-box project4" @click="router.push('/project4')">
      <h3>Habitio</h3>
      <p>habit tracker web application</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.projects-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.project-box {
  width: 10rem;
  height: 10rem;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;
  animation: hover-effect 4s infinite;
}
.project-box h3 {
  font-weight: 400;
  font-size: 1.2rem;
}
.project-box p {
  font-weight: 300;
  font-size: 0.9rem;
  margin: 0 0 1rem 0;
}
.project1 {
  background-color: #BB3B5A;
}
.project2 {
  background-color: #D8517A;
}
.project3 {
  background-color: #E784A0;
}
.project4 {
  background-color: #2A2A2A;
}
</style>
