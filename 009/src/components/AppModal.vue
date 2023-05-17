<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal">
    <h3>Это заголоовок модалки</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ipsum autem corporis quae nam iusto in quo tempore cupiditate dolorem?</p>
  </div>
</template>

<script>
export default {
  emits: ['close']
}
</script>

<style scoped>

</style>