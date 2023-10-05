<script setup>
import {onMounted, ref, toRefs,defineProps} from "vue";
import {messages} from "@/messages";
import {threadItems} from "@/threadItems"
import {useThreadItemStore} from "@/stores/GlobalStore";
const threadItemStore = useThreadItemStore();
const {activeThreadItem} = toRefs(threadItemStore);


</script>

<template>
<div class="threadMsg">
  <div v-for="item in activeThreadItem.msgReceived" :key="item.id" class="msg-received">

    {{item.text}}
  </div>
  <div v-for="item in activeThreadItem.msgSend" :key="item.id" class="msg-send">
    {{item.text}}
  </div>
</div>
</template>
















<style scoped>
.threadMsg{
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 100%;

}
.msg-received {
  background-color: #fff;
  color: #000;
  padding: 15px;
  border-radius: 8px;
  margin-left: 10px;
  margin-bottom: 8px;
  align-self: flex-start;
  max-width: 500px;
  word-wrap: break-word;
  font-size: medium;
  width: fit-content;
}
.msg-send{
  background-color: #dcf8c6;
  color: #000;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 8px;
  margin-right: 10px;
  align-self: flex-end; /* Right-align sent messages */
  max-width: 500px; /* Limit message width for better readability */
  word-wrap: break-word;
  width: fit-content;
  font-size: medium;
}



</style>