<template>
  <div>
    <header>
      <h1>Akash's Vue 3 Website</h1>
    </header>

    <nav>
      <button @click="scrollToSection('home')">Home</button>
      <button @click="scrollToSection('projects')">Projects</button>
      <button @click="scrollToSection('contact')">Contact</button>
    </nav>

    <main>
      <HomeSection id="home" />
      <ProjectSection id="projects" />
      <ContactSection id="contact" />
    </main>

    <FooterComponent />
  </div>
</template>

<script setup>
import HomeSection from "./components/HomeSection.vue";
import ProjectSection from "./components/ProjectSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterComponent from "./components/FooterComponent.vue";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>






<style>
body {
  background-color: #C4CED4;
  font-family: 'Poppins', sans-serif;
  color: #0C2340;
  margin: 0;
  padding: 0;
  text-align: center;
}

header {
  margin-top: 30px;
  font-size: 32px;
  font-weight: bold;
  color: #0C2340;
}

nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  background: #0C2340;
  padding: 12px;
  border-radius: 10px;
  width: fit-content;
  margin: 20px auto;
}

button {
  background: #C4CED4;
  border: none;
  color: #0C2340;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

button:hover {
  background: #D50032;
  color: white;
}

section {
  width: 80%;
  max-width: 800px;
  background: white;
  padding: 30px;
  margin: 40px auto 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  font-size: 24px;
  color: #0C2340;
  margin-bottom: 15px;
}

input {
  width: 100%;
  max-width: 300px;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #0C2340;
}

button.submit {
  background: #D50032;
  color: white;
  padding: 12px;
  font-size: 16px;
  margin-top: 10px;
}

button.submit:hover {
  background: #B20029;
}

footer {
  background: #0C2340;
  color: white;
  text-align: center;
  padding: 15px 0;
  font-weight: bold;
}
</style>

