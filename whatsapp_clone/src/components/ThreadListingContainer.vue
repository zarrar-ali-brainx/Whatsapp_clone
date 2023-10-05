<script setup>

import ThreadListingHeader from "@/components/ThreadListingHeader.vue";
import SearchBar from "@/components/SearchBar.vue";
import ThreadListing from "@/components/ThreadListing.vue";

</script>

<template>
  <div class="thread-listing-container">
    <ThreadListingHeader />
    <SearchBar />
    <ThreadListing />
  </div>
</template>

<style scoped>
.thread-listing-container{
  display: flex;
  flex-direction: column;
  position: relative;

}
</style>