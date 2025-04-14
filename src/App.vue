<template>
  <div class="app-content" id="appContent">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const locale = computed(() => zhCn)
</script>

<style lang="less">
.app-content {
  width: 100%;
  height: 100%;
}
</style>
