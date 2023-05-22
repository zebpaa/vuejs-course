<template>
  <div class="card">
    <p>Название: <strong>{{ name }}</strong></p>
    <p>Версия: <strong>{{ version }} ({{ doubleVersion }})</strong></p>

    <button class="btn warning" @click="changeToThree">Изменить на 3 версию</button>
  </div>
</template>

<script>
import {computed} from 'vue'
export default {
  props: ['name', 'version'],
  setup(props) {

    function change(){
      this.$emit()
    }

    return {
      changeToThree: change,
      doubleVersion: computed(() => props.version * 2)
    }
  }
}
</script>

<style scoped>

</style>