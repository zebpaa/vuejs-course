<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <small>data, methods, computed, watch</small>
      <div class="form-control">
        <input type="text" v-model="firstName">
      </div>

      <button class="btn" @click="change">Изменить</button>
    </div>
    <FrameworkInfo :name="name" :version="version"/>
  </div>
</template>

<script>
import {
  ref, 
  reactive, 
  toRefs, 
  isRef, 
  isReactive, 
  computed,
  watch
} from 'vue'
import FrameworkInfo from './FrameworkInfo.vue'

export default {
  setup(){
    const name = ref('VueJS')
    const version = ref(3)
    const textInput = ref(null)
    const firstName = ref('')


    const framework = reactive ({
      name: 'VueJS',
      version: 3
    })

    // const doubleVersion = computed(() => version.value * 2)

    // watch([doubleVersion, name], (newValues, oldValues) => {
    //   console.log('new version', newValues[0])
    //   console.log('new name', newValues[1])
    //   console.log('old version', oldValues[0])
    //   console.log('old name', oldValues[1])
    // })

    watch(firstName, (newV, oldV) => {
      console.log(newV)
    })

    function changeInfo(){
      name.value = 'Vue JS !'
      version.value = 42
    }

    return {
      name, version,
      change: changeInfo,
      firstName
    }
  },
  components: {FrameworkInfo}
}
</script>