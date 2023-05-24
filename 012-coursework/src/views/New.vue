<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model.trim="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button 
      class="btn primary" 
      @click="createNewTask"
      :disabled="!isValid"
    >Создать</button>
    
  </form>
</template>

<script>
export default {
  data(){
    return {
      title: '',
      date: '',
      description: ''
    }
  },
  computed: {
    isValid(){
      return this.title !== '' && this.date !== '' && this.description !== ''
    }
  },
  methods: {
    createNewTask(){
      this.$router.push('/tasks')
    }
  } 
  
}
</script>