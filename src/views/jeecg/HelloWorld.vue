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
    console.log("out");
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

    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner1.png"-->
    <!--           data-height="180" data-width="1920" height="216" width="2304"-->
    <!--           style="transform: translate(0px, 0px) rotate(0deg) " alt=""/>-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner2.png"-->
    <!--           data-height="176" data-width="1069" height="211" width="1282"-->
    <!--           style="transform: translate(0px, 0px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner3.png"-->
    <!--           data-height="173" data-width="1687" height="173" width="1687"-->
    <!--           style="transform: translate(0px, 0px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner4.png"-->
    <!--           data-height="160" data-width="1920" height="160" width="1920"-->
    <!--           style="transform: translate(0px, 10px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner5.png"-->
    <!--           data-height="83" data-width="1920" height="83" width="1920"-->
    <!--           style="transform: translate(0px, 55px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner6.png"-->
    <!--           data-height="111" data-width="1920" height="111" width="1920"-->
    <!--           style="transform: translate(0px, 40px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner7.png"-->
    <!--           data-height="106" data-width="713" height="106" width="713"-->
    <!--           style="transform: translate(-250px, -10px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner8.png"-->
    <!--           data-height="93" data-width="106" height="46" width="53"-->
    <!--           style="transform: translate(300px, 25px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner9.png"-->
    <!--           data-height="80" data-width="260" height="80" width="260"-->
    <!--           style="transform: translate(130px, 20px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner10.png"-->
    <!--           data-height="61" data-width="70" height="61" width="70"-->
    <!--           style="transform: translate(-320px, 20px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner11.png"-->
    <!--           data-height="104" data-width="92" height="93" width="82"-->
    <!--           style="transform: translate(-180px, 18px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner12.png"-->
    <!--           data-height="127" data-width="341" height="127" width="341"-->
    <!--           style="transform: translate(75px, 19px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner13.png"-->
    <!--           data-height="98" data-width="694" height="117" width="832"-->
    <!--           style="transform: translate(-720px, 48px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner14.png"-->
    <!--           data-height="174" data-width="340" height="174" width="340"-->
    <!--           style="transform: translate(-600px, -5px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner15.png"-->
    <!--           data-height="180" data-width="454" height="180" width="454"-->
    <!--           style="transform: translate(-850px, 0px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner16.png"-->
    <!--           data-height="74" data-width="422" height="74" width="422"-->
    <!--           style="transform: translate(-1200px, 55px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner17.png"-->
    <!--           data-height="118" data-width="214" height="118" width="214"-->
    <!--           style="transform: translate(450px, 20px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner18.png"-->
    <!--           data-height="75" data-width="126" height="75" width="126"-->
    <!--           style="transform: translate(350px, 50px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner19.png"-->
    <!--           data-height="180" data-width="367" height="180" width="367"-->
    <!--           style="transform: translate(700px, 0px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <img src="@/assets/images/banner20.png"-->
    <!--           data-height="74" data-width="422" height="74" width="422"-->
    <!--           style="transform: translate(1200px, 55px) rotate(0deg) ">-->
    <!--    </div>-->
    <!--    <div class="layer">-->
    <!--      <video loop="" src="@/assets/images/banner.webm"-->
    <!--             playsinline="" width="2112" height="154"-->
    <!--             style="object-fit: cover; transform: translate(0px, 0px) rotate(0deg) "-->
    <!--             data-height="140" data-width="1920"></video>-->
    <!--    </div>-->
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/less/HelloWorld.less';
</style>
