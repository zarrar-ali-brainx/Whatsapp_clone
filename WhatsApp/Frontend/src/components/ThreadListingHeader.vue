<script setup>

import {
  ChatBubbleOvalLeftEllipsisIcon,
  ClockIcon,
  EllipsisVerticalIcon,
  PlusIcon, UserIcon,
  UsersIcon
} from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="tl-header">
    <UserIcon class="user-icon text-white "/>
    <span class="users-icon"><UsersIcon style="width: 23px;height: 23px; margin-top: -10px; margin-left: 10px; cursor: pointer; "/> </span>
    <ClockIcon style="width: 23px;height: 23px; margin-top: 18px; margin-left: 30px; cursor: pointer;"/>
    <ChatBubbleOvalLeftEllipsisIcon style="width: 23px;height: 23px; margin-top: 17px; margin-left: 30px; cursor: pointer;"/>
    <PlusIcon style="width: 23px;height: 23px; margin-top: 17px; margin-left: 30px; cursor: pointer;"/>
    <EllipsisVerticalIcon style="width: 23px;height: 23px; margin-top: 17px; margin-left: 20px; cursor: pointer;"/>
  </div>
</template>

<style scoped>

.tl-header{
  display: flex;
  flex-direction: row;
  height: 59px;
  width: 455px;
  background-color: #f0f2f5;
  position: relative;
  overflow: auto;
  box-sizing: border-box;

}
.tl-header > img{
  border-radius: 50%;
}

.users-icon{
  height: 40px;
  width: 40px;
  margin-top: 10px;
}
.user-icon{
  height: 40px;
  width: 40px;
  overflow: auto;
  border-radius: 50%;
  border: 1px black;
  margin-left: 15px;
  margin-top: 10px;
  background-color: lightgray;
  margin-right: 165px;
  cursor: pointer;
  max-width: 100%;
  position: relative;

}

</style>