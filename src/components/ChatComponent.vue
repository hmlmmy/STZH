<template>
    <el-container>
      <el-header>聊天界面</el-header>
      <el-main>
        <el-input v - model="message" placeholder="输入消息"></el-input>
        <el-button @click="sendMessage">发送</el-button>
      </el-main>
    </el-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        messages: [],
        inputMessage: ''
      };
    },
    methods: {
      async sendMessage() {
        if (this.inputMessage.trim() === '') return;
        const userMessage = { type: 'user', content: this.inputMessage };
        this.messages.push(userMessage);
        this.inputMessage = '';
        try {
          const response = await axios.post('/api/chat', { question: userMessage.content });
          const botMessage = { type: 'bot', content: response.data.answer };
          this.messages.push(botMessage);
        } catch (error) {
          console.error('请求出错:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* 可以添加一些样式 */
  </style>