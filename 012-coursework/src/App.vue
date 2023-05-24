<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'

export default {
  methods: {

  },
  components: {TheNavbar},
  provide() {
    return {
      tasks: [
        {id: '1', title: 'Task 1'},
        {id: '2', title: 'Task 2'}
      ]
    }
  }
}
</script>

<style>

</style>
