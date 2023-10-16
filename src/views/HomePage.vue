<template>
  <div class="home-page">
    <!-- hello and photo section -->
    <div class="hello-section">
      <h2>Hello World! I’m <span>Teo</span>.</h2>
      <p class="subtitle">I'm a full stack web developer based in Sheffield, UK.</p>
      <img src="@/assets/images/Teo-pink.png" class="teo-pink-img"/>
    </div>
    <!-- my skills section -->
    <div class="skills-section">
      <h2>My skills</h2>
      <div class="skills-boxes">
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src="@/assets/icons/html5.png" class="skill"/>
            </div>
            <div class="flip-box-back">
                <p class="flip-box-back-text">HTML 5</p>
            </div>
          </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src="@/assets/icons/css3.png" class="skill"/>
            </div>
            <div class="flip-box-back">
                <p class="flip-box-back-text">CSS 3</p>
            </div>
          </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src="@/assets/icons/javascript.png" class="skill"/>
            </div>
            <div class="flip-box-back">
                <p class="flip-box-back-text">JavaScript</p>
            </div>
          </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src="@/assets/icons/php.png" class="skill"/>
            </div>
            <div class="flip-box-back">
                <p class="flip-box-back-text">PHP</p>
            </div>
          </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src="@/assets/icons/vue.png" class="skill"/>
            </div>
            <div class="flip-box-back">
                <p class="flip-box-back-text">Vue Js</p>
            </div>
          </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src="@/assets/icons/laravel.png" class="skill"/>
            </div>
            <div class="flip-box-back">
                <p class="flip-box-back-text">Laravel</p>
            </div>
          </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src="@/assets/icons/git.png" class="skill"/>
            </div>
            <div class="flip-box-back">
                <p class="flip-box-back-text">Git</p>
            </div>
          </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src="@/assets/icons/azure-devops.png" class="skill"/>
            </div>
            <div class="flip-box-back">
                <p class="flip-box-back-text">Azure DevOps</p>
            </div>
          </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src="@/assets/icons/figma.png" class="skill"/>
            </div>
            <div class="flip-box-back">
                <p class="flip-box-back-text">Figma</p>
            </div>
          </div>
        </div>
        <div class="flip-box">
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <img src="@/assets/icons/adobe-illustrator.png" class="skill"/>
            </div>
            <div class="flip-box-back">
                <p class="flip-box-back-text">Adobe Illustrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- my projects section -->
    <div class="projects-section">
      <h2>My work</h2>
      <div class="project1">
        <div class="project-details">
          <h3>Sandbach School Cautions Register</h3>
          <p>behaviour management web application</p>
        </div>
        <img src="@/assets/images/project1.png" class="project-showcase-img parallax-img"/>
        <div class="learn-more-btn-container"><button @click="router.push('/project1')">learn more...</button></div>
      </div>
      <div class="project2">
        <div class="project-details">
          <h3>Workfolio</h3>
          <p>task management web application</p>
        </div>
        <img src="@/assets/images/project2.png" class="project-showcase-img parallax-img"/>
        <div class="learn-more-btn-container" @click="router.push('/project2')"><button>learn more...</button></div>
      </div>
      <div class="project3">
        <div class="project-details">
          <h3>Quizzy</h3>
          <p>quizzes and flaschards creation tool</p>
        </div>
        <img src="@/assets/images/project3.png" class="project-showcase-img parallax-img"/>
        <div class="learn-more-btn-container"><button @click="router.push('/project3')">learn more...</button></div>
      </div>
    </div>
    <!-- contact section -->
    <div class="contact-section">
      <h2>Contact <span>me</span></h2>
      <div class="contact-inputs-container">
        <input type="text" class="name-input" placeholder="name..." v-model="emailParams.sender_name"/>
        <input type="email" class="email-input" placeholder="email..." v-model="emailParams.sender_email"/>
        <textarea placeholder="message..." class="message-input" v-model="emailParams.sender_message"></textarea>
      </div>
      <div class="send-btn-container"><button @click="sendEmail">send</button></div>
      <div class="social-icons-container">
        <a href="https://www.linkedin.com/in/teodoraabaza/" target="_blank"><img src="@/assets/icons/linkedin.png" class="social-icon"/></a>
        <a href="https://github.com/teoabaza" target="_blank"><img src="@/assets/icons/github.png" class="social-icon"/></a>
        <a href="mailto:teodoraabaza@gmail.com" target="_blank"><img src="@/assets/icons/mail.png" class="social-icon"/></a>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import router from '../router';
import emailjs from 'emailjs-com';
import { loading, notify } from '../hooks/globals';

const projectImages = ref([]);
let scrollValue = 0;

onMounted(() => {
  projectImages.value = document.querySelectorAll('.project-showcase-img');
  window.addEventListener('scroll', handleScroll);
});

function handleScroll() {
  scrollValue = window.scrollY;
  requestAnimationFrame(moveImages);
}

function moveImages() {
  const windowHeight = window.innerHeight;
  projectImages.value.forEach((image) => {
    const rect = image.getBoundingClientRect();
    const translateY = ((rect.top + rect.height / 2 - windowHeight / 2) * 0.1);
    image.style.transform = `translateY(${translateY}px)`;
  });
}


//email parameters
const emailParams = ref({
  sender_name: '',
  sender_email: '',
  sender_message: '',
});

function sendEmail(){
  if (emailParams.value.sender_name && emailParams.value.sender_email && emailParams.value.sender_message) {
    loading.value = true;
    emailjs.send("contact_service", "contact_form", emailParams.value, "9ZP3HD_LR2dZqLN7k")
    .then((response) => {
      console.log('Message sent successfully:', response);
      notify('SENT','Message sent successfuly','#5EBB8D',2000);
      // Reset form fields after successful submission
      emailParams.value.sender_name = '';
      emailParams.value.sender_email = '';
      emailParams.value.sender_ = '';
      loading.value = false;
    })
    .catch((e) => {
      alert("Sorry. Something went wrong. Email not sent.");
      console.log(e);
      loading.value = false;
    });
  } else alert('Please fill out all fields.');
}

</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
h2 {
  font-weight: 400;
  font-size: 1.8rem;
}
h2 span {
  color: #E784A0;
}
.subtitle {
  color: #d0cdce;
  margin: 1rem 2.5rem;
  font-weight: 400;
}
.teo-pink-img {
  max-width: 50vw;
  margin: 2rem;
}
.hello-section {
  margin: 0.5rem 0;
}
.skills-section {
  width: 100%;
  margin-top: 2rem;
  background-color: #EE5886;
  padding: 1.5rem 0 3rem 0;
}
.skills-section h2 {
  color: #090909;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
}
.skills-boxes {
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 1rem;
}
.flip-box {
  width: 4.5rem;
  height: 4.5rem;
  margin: 0.5rem 0.1rem;
}
.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}
.flip-box-front, .flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip-box-back {
  transform: rotateY(180deg);
  border: solid 3.2px;
  border-color: #000000;
  color: rgb(0, 0, 0);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flip-box-back-text {
  font-weight: bold;
  font-size: 0.9rem;
}
.skill {
  width: 90%;
}
.projects-section {
  width: 100%;
  background-color: #2A2A2A;
}
.projects-section h2 {
  margin: 4rem 0 0 0;
}
.project1 {
  background-color: #2A2A2A;
  padding: 1rem 1rem 2rem 1rem;
}
.project2 {
  background-color: #090909;
  padding: 1rem 1rem 2rem 1rem;
}
.project3 {
  background-color: #BB3B5A;
  padding: 1rem 1rem 2rem 1rem;
}
.project-details {
  width: 50%;
  margin: 3rem 0 1rem 3rem;
  text-align: left;
}
.project-details h3 {
  font-weight: 300;
  font-size: 1.2rem;
}
.project-details p {
  font-weight: 200;
  font-size: 0.9rem;
  padding-right: 1rem;
}
.project-showcase-img {
  width: 100%;
}
.learn-more-btn-container {
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
  margin-top: 2rem;
}
.learn-more-btn-container button {
  font-size: 1rem;
  border-radius: 5px;
  background-color: rgba(149, 142, 149, 0.14);
  color: white;
  border: none;
  padding: 0.5rem 1.2rem;
  font-family: 'Urbanist', Arial, Helvetica, sans-serif;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}
.learn-more-btn-container button:hover {
  background-color: rgba(149, 142, 149, 0.25);
}
.contact-section {
  width: 100%;
  padding: 2rem 0;
}
.contact-inputs-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.name-input, .email-input, .message-input {
  width:60%;
  background-color: #090909;
  border: 2px solid #E784A0;
  border-radius: 5px;
  padding: 8px 15px;
}
.email-input, .name-input {
  margin-bottom: 0.8rem;
}
.email-input, .name-input, .message-input {
  color: white;
}
.name-input::placeholder, .email-input::placeholder, .message-input::placeholder {
  font-size: 0.75rem;
  font-weight: 300;
  color: #c0a5ac;
}
.send-btn-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
.send-btn-container button {
  font-size: 1rem;
  border-radius: 5px;
  background-color: rgba(149, 142, 149, 0.24);
  color: white;
  border: none;
  padding: 0.5rem 1.2rem;
  font-family: 'Urbanist', Arial, Helvetica, sans-serif;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
}
.send-btn-container button:hover {
  background-color: rgba(192, 139, 182, 0.25);
}
.social-icons-container {
  margin: 4rem 0 1rem 0;
}
.social-icon {
  width: 3.5rem;
  margin: 0 0.5rem 0 0.5rem;
}
.social-icon:hover {
  opacity: 0.6;
}
.parallax-img {
  transition: transform 0.3s ease-out;
}
</style>
