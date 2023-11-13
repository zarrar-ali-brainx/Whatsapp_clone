<script setup>

import Messages from "@/components/Messages.vue";
</script>

<template>
  <div class="thread-screen">
    <Messages />
  </div>

</template>

<style scoped>
.thread-screen{
  display: flex;
  height: 810px;
  background-color: #ECE5DD;
  max-width: 100%;
  position: relative;
  overflow: auto;

}

</style>