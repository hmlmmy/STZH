<template>
    <el-container>
      <el-header>聊天界面</el-header>
      <el-main>
        <el-input v - model="message" placeholder="输入消息"></el-input>
        <el-button @click="sendMessage">发送</el-button>
      </el-main>
    </el-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { ElMessage } from 'element-plus';
  
  const message = ref('');
  
  const sendMessage = () => {
    if (message.value.trim() === '') {
      ElMessage.warning('消息不能为空');
      return;
    }
    // 这里可以添加发送消息到后端的逻辑，比如使用axios
    console.log('发送的消息:', message.value);
    message.value = '';
  };
  </script>
  
  <style scoped>
  /* 可以添加一些样式 */
  </style>