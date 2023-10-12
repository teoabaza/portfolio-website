<template>
  <div id="app">
    <div id="background"></div>
    <nav-bar />
    <div id="content">
      <RouterView />
    </div>
    <loading-overlay v-if="loading"/>
    <notification :title="notificationTitle" :text="notificationText"/>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue';
import Notification from './components/Notification.vue';
import { RouterView } from 'vue-router';
import LoadingOverlay from './components/LoadingOverlay.vue';
import { loading, notificationTitle, notificationText } from './hooks/globals';
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';

const createBubble = () => {
  const geometry = new THREE.SphereGeometry(0.1, 32, 32);
  const material = new THREE.MeshStandardMaterial({
    color: 0xfdccfc,
    transparent: true,
    opacity: 0.8,
    roughness: 0.2,
    metalness: 0.8
  });
  return new THREE.Mesh(geometry, material);
};

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const numberOfDots = 150;
const dots = [];

for (let i = 0; i < numberOfDots; i++) {
  const dot = createBubble();
  dot.position.x = (Math.random() - 0.5) * 10;
  dot.position.y = (Math.random() - 0.5) * 10;
  dot.position.z = (Math.random() - 0.5) * 10;
  scene.add(dot);
  dots.push(dot);
}

onMounted(() => {
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x090909);
  const canvasContainer = document.getElementById('background');
  if (canvasContainer) {
    canvasContainer.appendChild(renderer.domElement);
  }

  const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
  directionalLight.position.set(1, 1, 1).normalize();
  scene.add(directionalLight);

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  });
  window.addEventListener('touchstart', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  function animate() {
    requestAnimationFrame(animate);

    dots.forEach(dot => {
      dot.position.x += Math.sin(dot.position.y) * 0.01;
      dot.position.y += Math.sin(dot.position.x) * 0.01;
    });

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(dots);

    if (intersects.length > 0) {
      const targetPosition = new THREE.Vector3(
        intersects[0].object.position.x,
        intersects[0].object.position.y + 1,
        intersects[0].object.position.z
      );

      new TWEEN.Tween(intersects[0].object.position).to(targetPosition, 1000).start();
    }
    TWEEN.update();

    renderer.render(scene, camera);
  }

  animate();
});
</script>

<style scoped>
#background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
  background-color: #090909;
}
#content {
  width: 100%;
  margin: 0;
}
</style>
