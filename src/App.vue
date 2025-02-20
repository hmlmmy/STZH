<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <img src="@/assets/images/d67fb58e7a9e1d7bffb26479fc0298b0.png" alt="logo" class="logo" />
        <span class="title">上铁智慧 - 铁路行业大模型</span>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="activeIndex" mode="vertical">
            <el-menu-item index="1">
              <el-icon><Search /></el-icon>
              <span>AI搜索</span>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon><Edit /></el-icon>
              <span>帮我写作</span>
            </el-menu-item>
            <!-- 其他菜单项 -->
          </el-menu>
          <div class="history-dialog">
            <h4>历史对话</h4>
            <ul>
              <li v-for="(dialog, index) in dialogHistory" :key="index">{{ dialog }}</li>
            </ul>
          </div>
        </el-aside>
        <el-main>
          <h1>下午好, hmmy</h1>
          <!-- 新增的显示对话区域 -->
          <div v-if="conversation.length" class="conversation-area">
            <div v-for="(item, index) in conversation" :key="index">
              <div v-if="item.type === 'user'" class="user-message">
                {{ item.text }}
              </div>
              <div v-else class="model-response">
                {{ item.text }}
              </div>
            </div>
          </div>
          <div class="input-group">
            <el-input
              v-model="inputValue"
              placeholder="发消息、输入@或选择技能"
            ></el-input>
            <el-button
              type="primary"
              :disabled="!inputValue"
              @click="sendMessage"
            ><el-icon><Top /></el-icon></el-button>
          </div>
          <div>
            <el-button type="primary">标准查询</el-button>
            <el-button type="success">帮我写作</el-button>
            <!-- 其他按钮 -->
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Search, Edit, Top } from '@element-plus/icons-vue';
import axios from 'axios';

//const activeIndex = ref('1');
const dialogHistory = ref([
  '对话样例',
]);

// 输入框的值
const inputValue = ref('');
// 存储对话记录，包含用户输入和模型返回
const conversation = ref([]);

// 发送消息的方法
const sendMessage = async () => {
  if (inputValue.value) {
    try {
      // 将用户输入添加到对话记录中
      conversation.value.push({ type: 'user', text: inputValue.value });
      // 更新历史对话记录
      dialogHistory.value.push(inputValue.value);

      const res = await axios.post(' http://localhost:8080/api/model/generate', {
        prompt: inputValue.value
      });

      // 将模型返回的结果添加到对话记录中
      conversation.value.push({ type: 'model', text: res.data.data });

      // 发送后清空输入框
      inputValue.value = '';
    } catch (error) {
      console.error('调用失败:', error);
      conversation.value.push({ type: 'model', text: '请求出错，请重试。' });
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: #f0f2f5;
}

.logo {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}

.title {
  font-size: 20px;
  font-weight: bold;
}

.history-dialog {
  margin-top: 20px;
  padding: 0 10px;
}

.input-group {
  display: flex;
  align-items: center;
}

.input-group .el-button {
  margin-left: 10px;
}

/* 新增的显示对话区域样式 */
.conversation-area {
  margin-bottom: 10px;
}

.user-message {
  background-color: rgb(236, 236, 255);
  color: rgb(0, 0, 0);
  padding: 5px;
  margin-bottom: 5px;
  text-align: right;
}

.model-response {
  background-color: #f0f2f5;
  padding: 5px;
  margin-bottom: 5px;
  text-align: left;
}
</style>