<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'

export default {
  data(){
    return {
      tasks: ['']
    }
  },
  methods: {

  },
  components: {TheNavbar},
  provide() {
    return {
      tasks: [
        {id: '1', theme: ''}

      ]
    }
  }
}
</script>

<style>

</style>
