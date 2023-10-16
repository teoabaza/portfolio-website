<template>
  <div class="contact-page">
    <div class="intro">
      <p>Interested in working together?</p>
      <p>I’m happy to have a chat.</p>
    </div>
    <h2>Send me a <span>message</span></h2>
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

    <img src="@/assets/images/logo-white.png" class="logo-white"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import { loading, notify } from '../hooks/globals';

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
.contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.intro {
  margin: 1rem 0;
}
.intro p {
  background-color: #090909;
  margin: 0.5rem 0;
}
h2 {
  font-weight: 400;
  font-size: 1.8rem;
}
h2 span {
  color: #E784A0;
}
.contact-inputs-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.name-input, .email-input, .message-input {
  width: 100%;
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
  animation: hover-effect 4s infinite;
}
.social-icon:hover {
  opacity: 0.6;
}
.logo-white {
  width: 7rem;
  margin: 2rem 0 3rem 0;
}
</style>
