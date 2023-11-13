<script setup>
import {FaceSmileIcon, MicrophoneIcon, PlusIcon, PaperAirplaneIcon} from "@heroicons/vue/24/solid";
import {ref, toRefs} from 'vue';
import {addMessageToThread} from "@/threadItems";
import {useThreadItemStore} from "@/stores/GlobalStore";


const threadItemStore = useThreadItemStore();
const {activeThreadItem} = toRefs(threadItemStore);
const newMessage = ref('');
const isTyping = ref(false);
console.log(activeThreadItem)
const checkMessage = () => {
  isTyping.value = newMessage.value.trim() !== '';
};

const sendMessage = () => {
  if (newMessage.value.trim() === '') {
    return;
  }

  const message = {
    text: newMessage.value,
  };

  addMessageToThread(activeThreadItem.value.id, message);
  console.log(activeThreadItem.value.id)
  console.log(message)
  newMessage.value = '';
  isTyping.value=false
};

</script>

<template>
  <!--  <div class="thread-reply-field">-->
  <!--            <span class="tr-field">-->
  <!--              <FaceSmileIcon class="emoji"/>-->
  <!--              <PlusIcon class="plus-icon"/>-->
  <!--              <input type="text" placeholder="Type a message">-->
  <!--              <button class="mic-button"> <MicrophoneIcon class="microphone-icon"/></button>-->
  <!--&lt;!&ndash;              <PaperAirplaneIcon class="send-icon"/>&ndash;&gt;-->
  <!--            </span>-->
  <!--  </div>-->
  <div class="thread-reply-field">
            <span class="tr-field">
              <FaceSmileIcon class="emoji"/>
              <PlusIcon class="plus-icon"/>
              <input v-model="newMessage" @keydown.enter="sendMessage" @input="checkMessage" class="disable" type="text" placeholder="Type a message">
              <button @click="sendMessage" class="mic-button">
               <i v-if="!isTyping" class="microphone-icon"> <MicrophoneIcon class="microphone-icon"/></i>
              <i  v-else class="send-icon"><PaperAirplaneIcon class="send-icon"/></i>
                </button>
            </span>
  </div>
</template>

<style scoped>
.tr-field{
  display: flex;
  overflow: auto;
  position: relative;
  flex-direction: row;
  box-sizing: border-box;
}

.tr-field > input {
  background-color: #ffffff;
  font-size: medium;
  height: 40px;
  border-radius: 9px;
  width: 85%;
  border: none;
  margin-left: 20px;
  margin-top: 5px;
  padding-left: 15px;
}
.tr-field > input:focus{
  outline: none;
}

.emoji{
  height: 28px;
  width: 30px;
  margin-left: 15px;
  color: grey;
  cursor: pointer;
  margin-top: 12px;

}
.plus-icon{
  height: 28px;
  width: 30px;
  margin-left: 15px;
  color: grey;
  cursor: pointer;
  margin-top: 12px;

}
.microphone-icon{
  height: 25px;
  width: 30px;

  color: grey;
  cursor: pointer;


}
.mic-button{
  border: none;
  margin-left: 10px;
}
.send-icon{
  height: 25px;
  width: 30px;
  color: grey;
  cursor: pointer;

}
.disable{
  user-select: none;

}
</style>