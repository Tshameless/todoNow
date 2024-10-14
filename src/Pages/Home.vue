<template>
    <div class="container">
        <div class="boxContainer">

            <n-button type="warning" @click="$router.push('/about')">跳转到About页面</n-button>222
        </div>
    </div>
</template>
<script setup lang="ts">
import { NButton } from 'naive-ui';
</script>

<style scoped lang="scss">
.container{
    width: 100%;
    height: 100%;
    margin-top: 30px;
    // box-sizing: border-box;
    .boxContainer{
    }
}
</style>