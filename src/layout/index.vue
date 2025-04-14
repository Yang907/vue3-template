<template>
  <el-container class="layout">
    <el-header><Header></Header></el-header>
    <el-container class="container">
      <el-aside class="aside"> <Slider></Slider> </el-aside>
      <el-main class="main">
        <el-scrollbar class="main-scrollbar">
          <router-view v-slot="{ Component }">
            <Transition enter-active-class="animate__animated animate__fadeIn">
              <component :is="Component" />
            </Transition>
          </router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ElContainer, ElHeader, ElAside, ElMain, ElScrollbar } from 'element-plus'
import Header from './components/header.vue'
import Slider from './components/slider.vue'

onMounted(() => {})
</script>

<style lang="less" scoped>
.layout {
  width: 100%;
  height: 100%;
  :deep(.el-header) {
    height: 60px;
    background-color: #c6e2ff;
    display: flex;
    align-items: center;
  }
  :deep(.container) {
    height: calc(100% - 60px);
    display: flex;
  }
  :deep(.aside) {
    width: 200px;
    height: 100%;
    background-color: #d9ecff;
  }
  :deep(.main) {
    flex: 1;
    height: 100%;
    background-color: #ecf5ff;
  }
}
</style>
