<template>
  <div class="container">
    <div class="date_box" id="calendar"></div>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>{{ isCompleted ? '回顾事件' : (isEditing ? '编辑事件' : '添加事件') }}</h2>
        <form @submit.prevent="submitEvent">
          <label for="title">事件名称:</label>
          <input type="text" id="title" v-model="eventTitle" :disabled="isCompleted" required>
          <label for="description">事件描述:</label>
          <textarea id="description" v-model="eventDescription" :disabled="isCompleted"></textarea>
          <label for="alarm">设置事件提醒:</label>
          <input type="datetime-local" id="alarm" v-model="eventAlarm" class="datetime-input" :disabled="isCompleted">
          <button v-if="!isCompleted" type="submit">{{ isEditing ? '保存' : '添加' }}</button>
          <button v-if="isEditing && !isCompleted" type="button" @click="deleteEvent">删除</button>
          <button v-if="isEditing && !isCompleted" type="button" @click="markAsCompleted">标记为已完成</button>
        </form>
      </div>
    </div>
    <div v-if="showEncouragement" class="encouragement">
      <div class="encouragement-content">
        <span class="close" @click="closeEncouragement">&times;</span>
        <h2>{{ encouragementMessage }}</h2>
      </div>
    </div>
    <div v-if="showReminder" class="reminder">
      <div class="reminder-content">
        <h2>{{ reminderMessage }}</h2>
        <div class="reminder-buttons">
          <button @click="remindLater(15)">15分钟后再次提醒</button>
          <button @click="remindLater(30)">30分钟后再次提醒</button>
          <button @click="closeReminder">不再提醒</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { Calendar } from '@fullcalendar/core'
import dayjs from 'dayjs'

const actionTimeValue = ref(dayjs(new Date()).format('YYYY-MM-DD'))
const showModal = ref(false)
const eventTitle = ref('')
const eventDescription = ref('')
const eventAlarm = ref('')
const storedEvents = ref(JSON.parse(localStorage.getItem('events') || '[]'))
const isEditing = ref(false)
const currentEvent = ref(null)
const showEncouragement = ref(false)
const showReminder = ref(false)
const reminderMessage = ref('')
const isCompleted = ref(false)
let calendar

const encouragementMessages = [
"宝宝，你做得超级棒，每一步都充满了智慧！",
"可爱的宝宝，你的表现实在是太出色了，继续加油呀！",
"宝宝呀，你真的很厉害，每次都能把事情完成得这么好！",
"厉害的宝宝，你就像一个小太阳，一直闪闪发光呢！",
"宝宝，你干得漂亮极了，你的努力大家都看得见！",
"亲爱的宝宝，你做得太棒了，你的进步就像火箭一样快！",
"聪明的宝宝，你完成得如此出色，真的太令人骄傲啦！",
"宝宝，你真厉害，就这么一路披荆斩棘地向前冲吧！",
"可爱宝宝，你所做的一切都太赞了，继续保持这种状态哦！",
"宝宝，你是个小天才呢，每次都能把事情做得这么完美！",
"乖宝宝，你的表现总是那么优秀，继续朝着梦想进发吧！",
"宝宝，你太棒啦，你做的事就像艺术品一样令人赞叹！",
"我的宝贝宝宝，你这么厉害，未来一定会更加了不起！",
"宝宝，你做得非常好，就像一个小英雄一样厉害！",
"聪明伶俐的宝宝，你完成得这么好，值得大大的奖励！",
"恭喜你,完成了所有的事情,你就是天才宝宝！"
]

const encouragementMessage = ref("")

const showEncouragementMessage = () => {
  const incompleteEvents = storedEvents.value.filter(event => !event.classNames?.includes('completed'))
  if (incompleteEvents.length === 0) {
    encouragementMessage.value = "恭喜你,完成了所有的事情,你就是天才宝宝！"
  } else {
    const randomIndex = Math.floor(Math.random() * (encouragementMessages.length - 1))
    encouragementMessage.value = encouragementMessages[randomIndex]
    console.log(encouragementMessage.value,666666,randomIndex);
    
  }
  showEncouragement.value = true
}

const openModal = (event = null) => {
  if (event) {
    isEditing.value = true
    currentEvent.value = event
    eventTitle.value = event.title
    eventDescription.value = event.extendedProps.description
    actionTimeValue.value = event.startStr
    eventAlarm.value = event.extendedProps.alarm || ''
    isCompleted.value = event.classNames.includes('completed')
  } else {
    isEditing.value = false
    currentEvent.value = null
    eventTitle.value = ''
    eventDescription.value = ''
    eventAlarm.value = ''
    isCompleted.value = false
  }
  showModal.value = true
}

const initCalendar = () => {
  let calendarEl = document.getElementById('calendar');
  calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    showNonCurrentDates: true,
    locale: 'zh-cn',
    handleWindowResize: true,
    contentHeight: '600px',
    slotMinTime: '08:00:00',
    displayEventTime: true,
    stickyFooterScrollbar: true,
    nowIndicator: true,
    weekNumbers: true,
    headerToolbar: {
      left: 'prev,next',
      right: 'today,timeGridDay,timeGridWeek,dayGridMonth,list'
    },
    events: storedEvents.value,
    eventClick: function (info) {
      openModal(info.event)
    },
    dateClick: function (info) {
      if (calendar.view.type === 'timeGridDay') {
        actionTimeValue.value = info.dateStr;
        openModal();
      } else {
        calendar.changeView('timeGridDay', info.dateStr);
      }
    },
    select: function (info) {
      actionTimeValue.value = info.startStr;
    },
    dropAccept: ".eventListItems",
    aspectRatio: 0.5,
    weekNumberContent: weekNumberContent,
    allDayText: '全天',
    buttonText: {
      today: '今日',
      month: '月',
      week: '周',
      day: '日',
      list: '列表'
    },
    selectable: true, // 允许选择日期
    editable: true, // 允许拖拽
    eventDrop: function (info) {
      const eventIndex = storedEvents.value.findIndex(event => event.title === info.event.title && event.start === info.oldEvent.startStr);
      if (eventIndex !== -1) {
        storedEvents.value[eventIndex].start = info.event.startStr;
        localStorage.setItem('events', JSON.stringify(storedEvents.value));
      }
    },
    eventDidMount: function (info) {
      if (info.event.classNames?.includes('completed')) {
        info.el.style.textDecoration = 'line-through'
        info.el.style.color = 'gray'
      }
    },
  });
  calendar.render();
}

const addToDoEvent = (info) => {
  const newEvent = {
    title: eventTitle.value,
    start: actionTimeValue.value,
    description: eventDescription.value,
    alarm: eventAlarm.value
  }
  storedEvents.value.push(newEvent)
  localStorage.setItem('events', JSON.stringify(storedEvents.value))
  setAlarm(newEvent)
  return newEvent
}

const updateEvent = () => {
  if (currentEvent.value) {
    currentEvent.value.setProp('title', eventTitle.value)
    currentEvent.value.setExtendedProp('description', eventDescription.value)
    currentEvent.value.setStart(actionTimeValue.value)
    currentEvent.value.setExtendedProp('alarm', eventAlarm.value)
    const eventIndex = storedEvents.value.findIndex(event => event.title === currentEvent.value.title && event.start === currentEvent.value.startStr)
    if (eventIndex !== -1) {
      storedEvents.value[eventIndex] = {
        title: eventTitle.value,
        start: actionTimeValue.value,
        description: eventDescription.value,
        alarm: eventAlarm.value
      }
      localStorage.setItem('events', JSON.stringify(storedEvents.value))
      setAlarm(storedEvents.value[eventIndex])
    }
  }
}

const deleteEvent = () => {
  if (currentEvent.value) {
    currentEvent.value.remove()
    storedEvents.value = storedEvents.value.filter(event => event.title !== currentEvent.value.title || event.start !== currentEvent.value.startStr)
    localStorage.setItem('events', JSON.stringify(storedEvents.value))
    closeModal()
  }
}

const markAsCompleted = () => {
  if (currentEvent.value) {
    currentEvent.value.setProp('classNames', ['completed'])
    const eventIndex = storedEvents.value.findIndex(event => event.title === currentEvent.value.title && event.start === currentEvent.value.startStr)
    if (eventIndex !== -1) {
      storedEvents.value[eventIndex].classNames = ['completed']
      localStorage.setItem('events', JSON.stringify(storedEvents.value))
    }
    // 立即更新展示状态
    currentEvent.value.setProp('classNames', ['completed'])
    closeModal()
    showEncouragementMessage()
  }
}

const closeEncouragement = () => {
  showEncouragement.value = false
}

const weekNumberContent = (arg) => {
  return '第' + arg.num + '周'
}

const closeModal = () => {
  showModal.value = false
}

const submitEvent = () => {
  if (isEditing.value) {
    updateEvent()
  } else {
    calendar.addEvent(addToDoEvent({ dateStr: actionTimeValue.value }))
  }
  closeModal()
}

const setAlarm = (event) => {
  if (event.alarm) {
    const alarmTime = new Date(event.alarm).getTime()
    const now = new Date().getTime()
    const timeToAlarm = alarmTime - now

    if (timeToAlarm > 0) {
      setTimeout(() => {
        reminderMessage.value = `宝宝,按照计划,你应该要${event.title}`
        showReminder.value = true
        if (navigator.userAgent.match(/Android/i)) {
          // Android
          if (Notification.permission === 'granted') {
            new Notification('事件提醒', {
              body: `宝宝,按照计划,你应该要${event.title}`,
              icon: '/path/to/icon.png'
            })
          } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
              if (permission === 'granted') {
                new Notification('事件提醒', {
                  body: `宝宝,按照计划,你应该要${event.title}`,
                  icon: '/path/to/icon.png'
                })
              }
            })
          }
        }
      }, timeToAlarm)
    }
  }
}

const remindLater = (minutes) => {
  setTimeout(() => {
    alert(reminderMessage.value)
  }, minutes * 60 * 1000)
  closeReminder()
}

const closeReminder = () => {
  showReminder.value = false
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
  padding: 0 10px;
  box-sizing: border-box;
}
:deep(.selected-date) {
  background-color: #2f74c3 !important;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6); /* 优化背景颜色 */
}
.modal-content {
  background-color: #fff;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 90%; /* 优化宽度 */
  max-width: 500px; /* 设置最大宽度 */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* 添加阴影 */
  border-radius: 10px; /* 添加圆角 */
  animation: fadeIn 0.3s; /* 添加淡入动画 */
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-top: 10px;
  font-weight: bold;
}
input, textarea {
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
button {
  margin-top: 20px;
  padding: 10px;
  background-color: #2f74c3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #255a9e;
}

.datetime-input {
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}

.completed {
  text-decoration: line-through;
  color: gray;
}

.encouragement {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
}
.encouragement-content {
  background-color: #fff;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  animation: fadeIn 0.3s;
}

.reminder {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
}
.reminder-content {
  background-color: #fff;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  animation: fadeIn 0.3s;
  text-align: center;
}
.reminder-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.reminder-buttons button {
  padding: 10px 20px;
  background-color: #2f74c3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
.reminder-buttons button:hover {
  background-color: #255a9e;
}
</style>
