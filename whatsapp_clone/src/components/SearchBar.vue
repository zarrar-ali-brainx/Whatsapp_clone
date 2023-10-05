<script setup>

import {MagnifyingGlassIcon} from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="Searchbar">
            <span class="Searchbar">
              <MagnifyingGlassIcon style="width: 23px;height: 35px; margin-top: 6px; margin-left: 20px; margin-right: -2px; cursor: pointer; background-color: #f0f2f5;
                                            border-top-left-radius: 8px; border-bottom-left-radius: 8px; padding-left: 8px"/>
              <input type="text" placeholder="Search or start a new Chat">
            </span>
  </div>
</template>

<style scoped>
.Searchbar{
  height: 49px;
  width: 455px;
  background-color: #ffffff;

}
.Searchbar > input{
  width: 355px;
  height: 35px;
  font-size: small;
  background-color: #f0f2f5;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-left: 22px;
  border: none;
}
.Searchbar > input:focus{
  outline: none;
}
</style>