<!-- 基于canvas的数字/数字+字符验证码 -->
<!-- 调用格式
     <s-identify
     @func="getMsgFormSon"
     :isRefreshCode="isRefreshCode"
     :identifyCodes="identifyCodes"   //可选传，选传写法有要求
     ></s-identify> -->
<template>
	<div class="s-canvas">
		<canvas id="s-canvas" :width="contentWidth" :height="contentHeight"></canvas>
	</div>
</template>
	 
<script setup lang="ts">
import { reactive, ref, toRefs, onMounted, watch } from "vue"
import { useRouter, useRoute } from "vue-router"
const props = defineProps({
	isRefreshCode: {
		type: Boolean,
		default: false
	},
	identifyCodes: {
		type: Array
	},
	identifyLen: {
		type: Number,
		default: 4
	},
	fontSizeMin: {
		type: Number,
		default: 20
	},
	fontSizeMax: {
		type: Number,
		default: 30
	},
	backgroundColorMin: {
		type: Number,
		default: 180
	},
	backgroundColorMax: {
		type: Number,
		default: 240
	},
	colorMin: {
		type: Number,
		default: 50
	},
	colorMax: {
		type: Number,
		default: 160
	},
	lineColorMin: {
		type: Number,
		default: 40
	},
	lineColorMax: {
		type: Number,
		default: 180
	},
	dotColorMin: {
		type: Number,
		default: 0
	},
	dotColorMax: {
		type: Number,
		default: 255
	},
	contentWidth: {
		type: Number,
		default: 112
	},
	contentHeight: {
		type: Number,
		default: 32
	}
})
const nums = [
	// "1",
	"2",
	"3",
	"4",
	"5",
	"6",
	// "7",
	"8",
	"9",
	"0",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	// "L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z"
]

const emit = defineEmits({})
const identifyText = ref('')
const router = useRouter()
const route = useRoute()

// 生成一个随机数
const randomNum = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
}
// 生成一个随机的颜色
const randomColor = (min, max) => {
	let r = randomNum(min, max);
	let g = randomNum(min, max);
	let b = randomNum(min, max);
	return "rgb(" + r + "," + g + "," + b + ")";
}
// 绘制干扰线
const drawLine = (ctx) => {
	for (let i = 0; i < 2; i++) {
		ctx.strokeStyle = randomColor(
			props.lineColorMin,
			props.lineColorMax
		);
		ctx.beginPath();
		ctx.moveTo(
			randomNum(0, props.contentWidth),
			randomNum(0, props.contentHeight)
		);
		ctx.lineTo(
			randomNum(0, props.contentWidth),
			randomNum(0, props.contentHeight)
		);
		ctx.stroke();
	}
}
// 生成l长度的验证码
const makeCode = (o, l) => {
	let identifyCodes = o;
	identifyText.value = "";
	for (let i = 0; i < l; i++) {
		identifyText.value +=
			identifyCodes[randomNum(0, identifyCodes.length)];
	}
}
// 验证码文本
const drawText = (ctx, txt, i) => {
	ctx.fillStyle = randomColor(props.colorMin, props.colorMax);
	ctx.font =
		randomNum(props.fontSizeMin, props.fontSizeMax) + "px SimHei";
	let x = (i + 1) * (props.contentWidth / (identifyText.value.length + 1));
	let y = randomNum(props.fontSizeMax, props.contentHeight - 5);
	var deg = randomNum(-45, 45);
	// 修改坐标原点和旋转角度
	ctx.translate(x, y);
	ctx.rotate(deg * Math.PI / 180);
	ctx.fillText(txt, 0, 0);
	// 恢复坐标原点和旋转角度
	ctx.rotate(-deg * Math.PI / 180);
	ctx.translate(-x, -y);
}
const state= reactive({
	canvasDom: null as HTMLCanvasElement|null,
	canvasCtx: null,
	
})
// 验证码图形
const drawPic = () => {
	let identifyCodesArray = props.identifyCodes
		? props.identifyCodes
		: nums;
	makeCode(identifyCodesArray, props.identifyLen);
	let identifyCode = "";
	state.canvasDom =<HTMLCanvasElement>document.getElementById("s-canvas");
	state.canvasCtx = state.canvasDom.getContext("2d");
	state.canvasCtx.textBaseline = "bottom";
	// 绘制背景
	state.canvasCtx.fillStyle = randomColor(
		props.backgroundColorMin,
		props.backgroundColorMax
	);
	state.canvasCtx.fillRect(0, 0, props.contentWidth, props.contentHeight);
	// console.log(identifyText.value, "huizhi");
	// 绘制文字
	for (let i = 0; i < props.identifyLen; i++) {
		drawText(state.canvasCtx, identifyText.value[i], i);
		identifyCode += identifyText.value[i];
	}
	//   for (let i = 0; i < this.identifyArray.length; i++) {
	//     this.drawText(state.canvasCtx, this.identifyArray[i], i);
	//   }
	drawLine(state.canvasCtx);
	drawDot(state.canvasCtx);
	// console.log(identifyCode, "要传的值");
	// 向父组件传值
	emit("func", identifyCode);
}
// 绘制干扰点
const drawDot=(ctx)=> {
	for (let i = 0; i < 50; i++) {
		ctx.fillStyle = randomColor(0, 255);
		ctx.beginPath();
		ctx.arc(
			randomNum(0, props.contentWidth),
			randomNum(0, props.contentHeight),
			1,
			0,
			1 * Math.PI
		);
		ctx.fill();
	}
}
onMounted(() => {
	drawPic()
})
watch(()=>props.isRefreshCode, (val, oldVal) => {
	// console.log(1,val)
	if (val) {
		drawPic();
	}
}, { deep: true })
</script>
	 
<style lang="scss" scoped>
.s-canvas {
	height: 32px;

	canvas {
		margin-top: 1px;
		margin-left: 8px;
	}
}
</style>