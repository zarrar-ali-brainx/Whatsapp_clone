<script setup>

import ThreadItem from "@/components/ThreadItem.vue";
import {UserIcon} from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="tl-listing">
    <ThreadItem />
  </div>
</template>

<style scoped>
.tl-listing {
  display: flex;
  height: 810px;
  background-color: #f0f2f5;
  max-height: 100%;
  position: relative;
  overflow: auto;
}


</style>