import { createRouter, createWebHistory } from "vue-router";
import Tasks from './views/Tasks'
import New from './views/New'
import Task from './views/Task'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/tasks', component: Tasks, alias: ''},
    { path: '/new', component: New },
    { path: '/task/:taskId', component: Task }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})