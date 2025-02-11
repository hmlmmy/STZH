<template>
    <div class="chat-container">
      <el-card class="chat-window">
        <div class="chat-header">
          <span>大模型对话应用</span>
        </div>
        <div class="chat-body">
          <div class="messages">
            <!-- 这里将动态显示对话内容 -->
            <div v-for="(message, index) in messages" :key="index" class="message">
              <span class="user">{{ message.user }}:</span>
              <span class="text">{{ message.text }}</span>
            </div>
          </div>
          <div class="input-area">
            <el-input
              v-model="inputMessage"
              placeholder="输入你的消息..."
              class="chat-input"
              @keyup.enter="sendMessage"
            ></el-input>
            <el-button type="primary" @click="sendMessage">发送</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'ChatComponent',
    setup() {
      const messages = ref([])
      const inputMessage = ref('')
  
      const sendMessage = () => {
        if (inputMessage.value.trim()) {
          messages.value.push({
            user: '你',
            text: inputMessage.value
          })
          // 这里可以添加代码来发送消息给大模型并获取回复
          // 假设我们立即模拟一个回复
          setTimeout(() => {
            messages.value.push({
              user: '大模型',
              text: '这是大模型的回复。' // 替换为实际从大模型获取的回复
            })
            inputMessage.value = ''
          }, 1000) // 模拟网络延迟
        }
      }
  
      return {
        messages,
        inputMessage,
        sendMessage
      }
    }
  }
  </script>
  
  <style scoped>
  .chat-container {
    width: 400px;
    margin: 0 auto;
  }
  .chat-window {
    margin-top: 20px;
  }
  .chat-header {
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid #ebeef5;
  }
  .messages {
    padding: 10px;
    overflow-y: auto;
    height: 300px;
    border-bottom: 1px solid #ebeef5;
  }
  .message {
    margin-bottom: 10px;
  }
  .user {
    font-weight: bold;
    margin-right: 5px;
  }
  .text {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 4px;
    background-color: #f5f7fa;
  }
  .input-area {
    display: flex;
    padding: 10px;
  }
  .chat-input {
    flex: 1;
  }
  </style>