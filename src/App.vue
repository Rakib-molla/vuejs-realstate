<template>
  <div id="app"> 
    <Navbar/>
    <router-view/> 
    <Footertop/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Footertop from './components/Footertop.vue';

export default {
  name: 'App',
 components:{ Navbar,Footer, Footertop }
}
</script>


<style>

</style>
