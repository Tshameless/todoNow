<template>
<div class="container">
    <div class="date_box" id="calendar">
    </div>
</div>
</template>
<script setup lang='ts'>
import { ref,reactive,onMounted} from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import {Calendar} from '@fullcalendar/core'
import dayjs from 'dayjs'
const actionTimeValue = ref(dayjs(new Date()).format('YYYY-MM-DD'))
const initCalendar = () => {
  let calendarEl = document.getElementById('calendar');
  let calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin,listPlugin],
    initialView: 'dayGridMonth',
    // weekends: false,//是否展示周末
    // initialDate:timeStamp.value, 
    showNonCurrentDates:true,
    locale: 'zh-cn', // 设置语言为简体中文
    handleWindowResize: true,
    // height: 'auto',
    //滚动条
    contentHeight: '600px',
    // allDaySlot: false, // 隐藏全天日程
    slotMinTime: '08:00:00', // 最小时间
    // slotMaxTime: '20:00:00', // 最大时间
    // slotDuration: '00:30:00', // 时间间隔
    // slotLabelInterval: '00:30:00', // 时间标签间隔
    // nowIndicator: true, // 显示当前时间指示器
    // selectable: true, // 允许选择日期
    // selectMirror: true, // 选择的日程显示在日历上方
    // editable: true,
    displayEventTime: true,
   stickyFooterScrollbar: true,
    nowIndicator: true,
   weekNumbers: true,
//    navLinks: true,
//   navLinkDayClick: function(date, jsEvent) {
//    //跳转到指定日期用timeGridDay
//   },
    customButtons: {
    myCustomButton: {
      text: '添加事件',
      click: function() {
        //打印当前选中的时间
        console.log(actionTimeValue.value,'初始化时间');
  
      }
    }
  },

  headerToolbar: {
    left: 'prev,next,myCustomButton',
    // center: 'title',
    right: 'today,timeGridDay,timeGridWeek,dayGridMonth,list'
  },

    eventClick: function(info) {
    },
dateClick: function(info) {
//     var days = document.querySelectorAll(".selected-date");
//   days.forEach(function(day) {
//     day.classList.remove("selected-date");
//   });  
//     info.dayEl.classList.add("selected-date");
    actionTimeValue.value = info.dateStr;
   calendar.changeView('timeGridDay', info.dateStr);
   //查看当前所处视图
    //打印当前选中的时间
  calendar.addEvent(addToDoEvent(info))
  },
 
//在timeGridDay视图下，点击时间段可以添加事件
select:function(info){
  calendar.addEvent(addToDoEvent(info))

},

    dropAccept: ".eventListItems",
    aspectRatio: 0.5,
     // 设置周次显示
weekNumberContent: weekNumberContent,
allDayText: '全天', // 自定义全天日程文本
    // weekText: '周', // 自定义周文本
    buttonText: {
      today: '今日', // 将 "today" 按钮文本改为 "今日"
      month: '月', // 将 "month" 按钮文本改为 "月"
      week: '周', // 将 "week" 按钮文本改为 "周"
      day: '日', // 将 "day" 按钮文本改为 "日"
      list: '列表' // 将 "list" 按钮文本改为 "列表"
    },
    selectable: false, // 允许选择日期
  });
  calendar.render();

}
const addToDoEvent = (info) => {
return {
  title: '新事件',
  start: info.dateStr,
}
}
const   weekNumberContent=(arg)=> {
    return '第' + arg.num + '周'
  }
onMounted(() => {
  initCalendar()
})
</script>
<style scoped lang='scss'>
.container {
    margin-top: 30px;
    width: 100%;
    height: 100%;
}
:deep(.selected-date) {
  background-color: #2f74c3 !important;; 
}
</style>
