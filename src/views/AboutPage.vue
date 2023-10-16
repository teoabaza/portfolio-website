<template>
  <div class="about-page">

    <div class="intro-box">
      <h3>Hi there, I’m Teo!</h3>
      <p>I come from Romania but now live in Sheffield, UK. My journey to becoming a software developer has been unconventional, shaped by diverse experiences and a passion for problem-solving.</p>
    </div>

    <div class="box-and-link-container-1">
      <div class="my-story-pink-box">
        <h3>My Story</h3>
        <p>I started my professional life studying Translation and Interpretation in English and German. After graduation, life took me on a wild ride. I worked odd jobs in hostels, met incredible people, and explored different corners of the world. Teaching is something I’ve always loved, which is why I became a qualified teacher after completing a PGDE in Sheffield. While I enjoyed mentoring, my heart led me towards coding. I took the self-taught route, learning HTML, CSS, JavaScript, and React. In 2022, I landed a gig as a Junior Software Developer at Oasis Studio in Chesterfield, where I dove headfirst into PHP, Vue.js, Laravel, and more. Now, as a freelancer, I'm constantly learning and taking on new challenges in Vue and Laravel.</p>
      </div>
      <a href="https://www.linkedin.com/in/teodoraabaza/" target="_blank" class="social-link linkedin">
        <img src="@/assets/icons/linkedin.png" class="social-icon"/>
        <span>My LinkedIn Profile</span>
      </a>
    </div>

    <div class="box-and-link-container-2">
      <div class="my-approach-pink-box">
        <h3>My Approach</h3>
        <p>I love diving into the heart of problems and finding creative solutions. Working with clients is something I’ve got very good at, because I focus on clear communication and making their ideas a reality (no matter how ridiculous they may sound to a developer!). I work well independently, but thrive in collaborative environments and fully believe in the power of teamwork.</p>
      </div>
      <a href="https://github.com/teoabaza" target="_blank" class="social-link github">
        <img src="@/assets/icons/github.png" class="social-icon"/>
        <span>My GitHub Profile</span>
      </a>
    </div>

    <div class="my-life-pink-box">
      <h3>My Life Beyond Work</h3>
      <p>When I'm not in front of my computer, you'll find me in the Peaks, walking or climbing. Though if it’s pouring I’ll be reading a nice book or playing boardgames with my friends. I also enjoy expressing my creative side occasionally, through drawing and painting.</p>
    </div>

    <div class="thank-you-box">
      <p>If you connect with my work ethic and creative spirit, I'm here, ready to collaborate. Let's turn your ideas into something extraordinary.</p>
      <p>Thank you for visiting my portfolio!</p>
    </div>

    <div class="get-in-touch-container">
      <img src="@/assets/images/TeoAbaza.png" class="teo-pic"/>
      <p>So that’s me. Interested in working together? <span @click="router.push('/contact')">Get in touch.</span></p>
      <a href="mailto:teodoraabaza@gmail.com" target="_blank"><img src="@/assets/icons/mail.png" class="mail-icon"/></a>
    </div>

  </div>
</template>

<script setup>
import router from '../router';

</script>

<style scoped>
.intro-box {
  background-color: #090909;
  max-width: 80vw;
  margin: 1rem 0 3rem 2rem;
  font-weight: 300;
}
.intro-box h3 {
  font-weight: 400;
}
.intro-box p {
  font-size: 0.85rem;
}
.box-and-link-container-1 {
  margin-left: 2rem;
}
.my-story-pink-box {
  background-color: #E784A0;
  color: #000000;
  max-width: 75vw;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 2rem;
}
.my-story-pink-box h3, .my-approach-pink-box h3, .my-life-pink-box h3 {
  font-weight: 500;
  margin: 0.5rem 0;
}
.my-story-pink-box p, .my-approach-pink-box p, .my-life-pink-box p {
  font-size: 0.85rem;
}
.social-link {
  max-width: 80vw;
  display: flex;
  align-items: center;
  text-decoration: none;
}
.social-link span {
  color: white;
  font-size: 1.3rem;
  margin-left: 0.5rem;
}
.social-icon {
  width: 50px;
}
.linkedin, .github {
  margin: 2rem 0;
}
.box-and-link-container-2 {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 2rem;
}
.my-approach-pink-box {
  background-color: #D8517A;
  color: #000000;
  max-width: 75vw;
  padding: 1rem;
  border-radius: 10px;
}
.my-life-pink-box {
  background-color: #BB3B5A;
  color: white;
  max-width: 75vw;
  padding: 1rem;
  border-radius: 10px;
  font-weight: 300;
  margin-left: 2rem;
}
.thank-you-box {
  background-color: #090909;
  max-width: 80vw;
  font-weight: 300;
  font-size: 0.85rem;
  margin: 2rem 0 0 2rem;
}
.get-in-touch-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 0;
}
.get-in-touch-container p {
  max-width: 90vw;
  margin: 2rem 0 1rem 0;
}
.get-in-touch-container p span {
  color: #E784A0;
}
.teo-pic {
  width: 10rem;
  border-radius: 15px;
}
.mail-icon {
  width: 65px;
}
</style>
