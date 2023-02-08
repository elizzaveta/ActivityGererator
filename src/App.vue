<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


</script>

<template>
  <header>
    <Header/>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
  <Footer/>
  </footer>
</template>


<style scoped>

footer{
  background: var(--footer-color);
  color: #F9F9F9;
  position: absolute;
  bottom: -88px;
  width: 100%
}
header{
  border-bottom: 1px solid var(--accent-color);
  background: var(--secondary-color);
}
main{
  margin: 50px 0;

}

@media (min-width: 1600px) {
  header, footer, main{
    padding: 10px 400px;
  }

}
@media (max-width: 1600px) {
  header, footer, main{
    padding: 10px 200px;
  }

}
@media (max-width: 1280px) {
  header, footer, main{
    padding: 5px 80px;
  }

}
@media (max-width: 800px) {
  header, footer, main{
    padding: 0 30px;
  }

}
</style>
