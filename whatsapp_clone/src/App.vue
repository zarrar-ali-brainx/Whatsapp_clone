<script setup>

import {ref} from "vue";
import ThreadListingContainer from "@/components/ThreadListingContainer.vue";
import ThreadViewContainer from "@/components/ThreadViewContainer.vue";

const awesome= ref(false)
</script>


<template>
  <div class=" custom-container">
    <div class="row custom-row1 ">
      <div class="app-view-container">
        <ThreadListingContainer />

        <ThreadViewContainer />
      </div>
    </div>
    <div class="row custom-row2 border"></div>
  </div>

</template>

<style scoped>
.custom-container{
  width: 100%;
  overflow: hidden;
}
.custom-row1{

  height: 127px;
  background-color: #00a884;
}
.custom-row2{
  background-color: #dadada;
  height: 847px;
  overflow: hidden;
}
.app-view-container{
  display: flex;
  position: relative;
  margin-top: 1.5%;
  margin-left: 5%;
  margin-right: 5%;

}
@media screen and (max-width: 1669px) {
  .app-view-container {

    margin-right: 2%;
    margin-left: 3.5%;
  }
}
@media screen and (max-width: 1597px) {
  .app-view-container {
    margin-left: 2.5%;
    margin-right: 1%;
  }
}
@media screen and (max-width: 1440px) {
  .app-view-container {

    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 0;

  }
}



.app-view-container > div {
  background-color: #f1f1f1;

  font-size: 30px;
}
























</style>
