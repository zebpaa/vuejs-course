<template>
  <header class="navbar">
    <strong>Счетчик {{ counter }}</strong>

    <button class="btn" @click="add">Добавить 5</button>
  </header>
</template>

<script>
export default {
  computed: {
    counter(){
      return this.$store.state.counter
    }
  },
  methods: {
    add(){
      this.$store.commit('addFive', 5)
    }
  }
}
</script>
