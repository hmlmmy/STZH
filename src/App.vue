<template>
  <div id="app">
    <ChatComponent />
  </div>
  <div class="chat-container">
    <div v-for="(msg, index) in messages" :key="index">
      <div :class="['message', msg.role]">
        {{ msg.content }}
      </div>
    </div>
    <el-input v-model="input" @keyup.enter="sendMessage">
      <template #append>
        <el-button @click="sendMessage">发送</el-button>
      </template>
    </el-input>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import ChatComponent from './components/ChatComponent.vue';

const input = ref('');
const messages = ref([]);

const sendMessage = async () => {
  if (!input.value.trim()) return;
  
  messages.value.push({ role: 'user', content: input.value });
  const userInput = input.value;
  input.value = '';
  
  try {
    const response = await axios.post('/api/chat', {
      question: userInput,
      userId: 1 // 实际应使用登录用户ID
    });
    
    messages.value.push({ 
      role: 'assistant', 
      content: response.data.answer 
    });
  } catch (error) {
    console.error('请求失败:', error);
  }
};

</script>