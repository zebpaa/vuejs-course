<template>
  <h1 class="text-white center">Задач пока нет</h1>
  <div>
    <h3 class="text-white">Всего активных задач: 0</h3>
    <div class="card" v-for="task in tasks">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="'done'" />
      </h2>
      <p>
        <strong>
          <small>
            {{new Date().toLocaleDateString()}}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="lookTask" :id="taskId">Посмотреть</button>
    </div>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus'

export default {
  data(){
    return {
      title: 'Название задачи'
    }
  },
  methods: {
    lookTask(){
      this.$router.push('/task/:taskId')
    }
  },
  inject: ['tasks'],
  components: {AppStatus}
}
</script>
