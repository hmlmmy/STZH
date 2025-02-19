<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <img src="@/assets/images/d67fb58e7a9e1d7bffb26479fc0298b0.png" alt="logo" class="logo" />
        <span class="title">上铁智慧-铁路行业大模型</span>
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
//const activeIndex = ref('1');
const dialogHistory = ref([
  '对话样例',

]);

// 输入框的值
const inputValue = ref('');

// 发送消息的方法
const sendMessage = () => {
  if (inputValue.value) {
    // 这里可以添加发送消息的逻辑
    console.log('发送的消息:', inputValue.value);

    // 将用户输入的消息添加到历史对话中
    dialogHistory.value.push(inputValue.value);

    // 发送后清空输入框
    inputValue.value = '';
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
</style>