<template>
  <NConfigProvider :theme-overrides="themeOverrides" :locale="zhCN" :date-locale="dateZhCN" style="height: 100%;">
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </NConfigProvider>
</template>
<script lang="ts" setup>
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
import { zhCN, dateZhCN } from 'naive-ui';

const themeOverrides: GlobalThemeOverrides = {
  common: {
    // textColorBase:'#fff',
    // textColor1:'#fff',
    // textColor2:'#fff',
    primaryColor: '#5D6FE3',
    primaryColorHover: "#5D6FE3",
    primaryColorPressed: "#2a67a5",
    primaryColorSuppl: "#2a67a5",
    hoverColor: "#efefef",
    infoColor: '#5D6FE3',
    infoColorHover: "#5D6FE350",
    infoColorPressed: "#5D6FE380",
    infoColorSuppl: "#5D6FE380",
    inputColor:'#33363900' //input框背景颜色
  },
  Form: {
    labelTextColor: '#B5B5B5'
  },
  DataTable: {
    thTextColor: '#B5B5B5',
    tdTextColor: '#B5B5B5',
    thColor: '#154BBA30',
    tdColor: '#181820',    
    tdColorStriped: '#24274030',
    tdColorHover: '#242740',
    borderColor:'#70707080'
  },
  Input: {
    color: 'rgba(255, 255, 255, 0)',
    textColor: '#B5B5B5',
    colorFocus: 'rgba(255, 255, 255, 0)',
    colorDisabled:'rgba(87, 87, 87, 0.5)',
    suffixTextColor:'#fff'
  },
  Pagination: {
    itemTextColor: '#B5B5B5',
    itemTextColorDisabled: '#B5B5B5',
    itemTextColorPressed: '#B5B5B5',
    itemTextColorActive: '#B5B5B5',
    buttonIconColor: '#B5B5B5',
    itemColorDisabled: '#181820',
    buttonColor: '#181820',
    jumperTextColor: '#B5B5B5',
  },
  Descriptions: {
    thColor: '#22222a',
    tdColor: '#22222a',
    tdTextColor: "#B5B5B5",
    thTextColor: "#B5B5B5",
  },
  
  Tree:{
    nodeTextColor:'#e0e1e2',
    nodeColorHover:'#e0e1e250',
  },
  TreeSelect:{
    menuColor:'#111822'
  },
  Radio: {
    textColor: '#B5B5B5',
    colorDisabled:'#6374de',
    // dotColorDisabled:'#6374de',
    // dotColorActive:'red',
  },
  // Select:{
  //   menuBoxShadow:'rgba(255, 255, 255, 0)'
  // },
  Menu:{
    itemTextColorActive:'#fff'
  },
  Button: {
    textColor: '#B5B5B5',
    textColorTertiary: '#B5B5B5',

  },
  Scrollbar:{
    color:'rgba(255, 255, 255, 0.5)',
    colorHover:"rgba(255, 255, 255, 0.3)"
  },
  Card:{
    colorModal:'#000',
    titleTextColor:'#B5B5B5',
    closeIconColor:'#B5B5B5',
    closeIconColorHover:'#B5B5B5'
  },
  Calendar:{
    cellColorHover:'#363C6C',
    titleTextColor:'#B5B5B5'
  },
  DatePicker:{
    itemTextColor:'#B5B5B5',
    calendarTitleTextColor:'#B5B5B5',
    calendarTitleColorHover:'#000',
  },
  Drawer:{
    color:'#14141B',
    titleTextColor:'#fff',
    textColor:'#fff'
  },
  Tabs:{
    tabColor:'#181820',
    tabTextColorCard:'#fff',
  }

}
</script>
<style>
#app {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}


</style>
