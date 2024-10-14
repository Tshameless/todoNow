<template>
    <div>
      11111
      <n-button type="warning" @click="$router.push('/')">跳到Home</n-button>
      <h1>55</h1>
      <n-data-table :data="data" :columns="columns"></n-data-table>
      <NotFound/>
    </div>
</template>
<script setup lang="ts">
  import { NButton,NDataTable } from 'naive-ui'
import NotFound from '../Pages/NotFound.vue';

import { ref } from 'vue'
const columns=ref([
    {
        title: '姓名',
        key: 'name'
    },
    {
        title: '年龄',
        key: 'age'
    },
    {
        title: '住址',
        key: 'address'
    }
])
const data=ref([
    {
        name: '张三',
        age: 20,
        address: '北京市海淀区'
    },
    {
        age: 25,
        address: '上海市浦东新区'
    },
    {
        name: '王五',
        age: 30,
        address: '深圳市南山区'
    }
])
</script>

<style scoped lang="scss">
div{
    width: 100vw;
    height: 100vh;
}
</style>