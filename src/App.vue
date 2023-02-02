<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <header>
    <Header/>
  </header>

  <main>
<!--    <Filters/>-->
    <router-view></router-view>
<!--    <ActivityGenerator/>-->

  </main>

  <footer>
  <Footer/>
  </footer>
</template>

<style scoped>
footer{
  background: var(--blue);
  color: #F9F9F9;
  position: absolute;
  top: 100vh;
  width: 100%
}
header{
  border-bottom: 1px solid var(--blue);
  background: white;
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
