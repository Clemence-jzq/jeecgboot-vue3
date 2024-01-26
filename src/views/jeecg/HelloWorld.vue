<script lang="ts" setup>
import {imgArr} from './banner';
import {onMounted, ref} from "vue";

// 鼠标进入banner的位置
let prevX = 0;
// 图片的起始位置
let initialPosition: number[] = [];

onMounted(() => {
  // 存储图片起始位置
  initialPosition = imgArr.value.map(item => item.position[0]);
});

function mouseEnter(e) {
  prevX = e.clientX;

  // 移除过渡效果
  const imgs = document.querySelectorAll('img');
  if (imgs) {
    imgs.forEach(img => {
      img.style.transition = 'none';
    });
  }
}

// 鼠标左右移动时控制图片位移
function mouseMove(e) {
  // X方向位移的改变量
  const disX = e.clientX - prevX;

  // 移动图片
  imgArr.value.forEach((item) => {
    item.position[0] += disX * item.speed / 1080;
  });
  prevX = e.clientX;
}

function mouseLeave(e) {
  imgArr.value.forEach((item, index) => {
    // 复原图片位置
    item.position[0] = initialPosition[index];

    // 添加过渡效果
    const imgs = document.querySelectorAll('img');
    if (imgs) {
      imgs.forEach(img => {
        img.style.transition = 'transform 0.5s ease-out';
      });
    }
  });
}
</script>

<template>
  <div class="animated-banner" @mouseenter="mouseEnter" @mouseleave="mouseLeave" @mousemove="mouseMove">
    <div v-for="item in imgArr" class="layer">
      <img :src="item.url"
           :style="{ transform: `translate(${item.position[0]}px,${item.position[1]}px)`}">
    </div>


    <div class="layer">
      <video autoplay loop preload="auto"  playsinline="" height="122px"
             src="@/assets/images/banner.webm"
             style="object-fit: cover; transform: translate(0px, 0px)"></video>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/less/HelloWorld.less';
</style>
