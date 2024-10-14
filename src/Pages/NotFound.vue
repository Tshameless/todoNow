<template>
    <div>
        未找到页面，即将返回，倒计时{{ gobackTime }}秒....
    </div>
</template>
<script setup lang="ts">
import { ref,watch } from 'vue';
const gobackTime = ref(5);
let timer = setInterval(() => {
    gobackTime.value --;
}, 1000);
watch(()=>gobackTime.value, (newVal, oldVal) => {
    if(newVal === 0){
        clearInterval(timer);
        window.location.href = '/';
    }   
})
</script>
<style scoped lang="scss">
div{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    color: #333;
}
</style>