<template>
  <div class="card card-w70">
    <div v-if="blocks.length">
      <component  
        v-for="block in blocks"
        :key="block.id"
        :is="'resume-'+ block.type"
        :value=block.value
      ></component>
    </div>
    
    <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
import ResumeAvatar from './parts/ResumeAvatar.vue'
import ResumeText from './parts/ResumeText.vue'
import ResumeTitle from './parts/ResumeTitle.vue'
import ResumeSubtitle from './parts/ResumeSubtitle.vue'

export default {
  props: ['blocks'],
  components: {ResumeText, ResumeAvatar, ResumeTitle, ResumeSubtitle}
}
</script>