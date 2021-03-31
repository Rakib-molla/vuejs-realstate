<template>
  <div class="home">
  <Slider/>
  <Card/>
  <Currentproject/>

  </div>
</template>

<script>
import Slider from '../components/home/Slider.vue'
import Card from '../components/home/Card.vue'
import Currentproject from '../components/home/Currentproject.vue'

export default {
  name: 'Home',
  components: { Slider, Card, Currentproject }
}
</script>
