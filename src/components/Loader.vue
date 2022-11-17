<template>
  <div class="fixed top-0 left-0 w-full h-full opacity-50 bg-black">
    <div class="absolute top-1/3 left-1/2 ">
      <div class="load"></div>
      <span class="text-white mt-2 block">{{ text }}</span>
    </div>
  </div>
</template>


<script lang="ts" setup>
  defineProps({
    text: String
  })
</script>

<style lang="less">
  .load {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgba(5, 236, 249, 0.8);
  }
  .load::before {
    content: "";
    width: 70px;
    height: 70px;
    background-color: hwb(233 5% 22%);
    position: absolute;
    left: 50%;
    bottom: 50%;
    z-index: 1;
    transform-origin: left bottom;
    animation: rotate 1.5s infinite linear;
  }
  .load::after {
    content: "";
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
    z-index: 2;
    border-radius: 50%;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>