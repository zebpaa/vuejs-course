<template>
  <div class="avatar">
    <img :src="$attrs.value">
  </div>
</template>

<style scoped>
  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 300px;
    height: auto;
    border-radius: 50%;
  }
</style>